import {useEffect, useRef} from 'react';

interface SpiderCanvasProps {
  theme: 'light' | 'dark';
  showGuides?: boolean;
  onTelemetry?: (data: {x: number; y: number; speed: number}) => void;
  className?: string;
}

interface LegState {
  baseAngle: number;
  side: 1 | -1;
  restDist: number;
  footX: number;
  footY: number;
  stepStartX: number;
  stepStartY: number;
  stepTargetX: number;
  stepTargetY: number;
  stepProgress: number;
  isStepping: boolean;
}

function solveTwoBoneIK(
  rootX: number,
  rootY: number,
  targetX: number,
  targetY: number,
  len1: number,
  len2: number,
  bendDir: number
): {jointX: number; jointY: number; endX: number; endY: number} {
  const dx = targetX - rootX;
  const dy = targetY - rootY;
  const rawDist = Math.hypot(dx, dy) || 0.001;
  const maxReach = (len1 + len2) * 0.985;
  const minReach = Math.abs(len1 - len2) + 2;
  const dist = Math.max(minReach, Math.min(maxReach, rawDist));

  const baseAngle = Math.atan2(dy, dx);
  const cosAngle = (len1 * len1 + dist * dist - len2 * len2) / (2 * len1 * dist);
  const clampedCos = Math.max(-1, Math.min(1, cosAngle));
  const kneeAngle = Math.acos(clampedCos);

  const theta1 = baseAngle + bendDir * kneeAngle;
  const jointX = rootX + Math.cos(theta1) * len1;
  const jointY = rootY + Math.sin(theta1) * len1;

  const scale = rawDist > maxReach ? maxReach / rawDist : 1;
  const endX = rootX + dx * scale;
  const endY = rootY + dy * scale;

  return {jointX, jointY, endX, endY};
}

export function SpiderCanvas({
  theme,
  showGuides = true,
  onTelemetry,
  className = '',
}: SpiderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const themeRef = useRef(theme);
  const guidesRef = useRef(showGuides);
  const telemetryRef = useRef(onTelemetry);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    guidesRef.current = showGuides;
  }, [showGuides]);

  useEffect(() => {
    telemetryRef.current = onTelemetry;
  }, [onTelemetry]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = canvas.clientWidth || 520;
    let height = canvas.clientHeight || 340;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      width = canvas.clientWidth || 520;
      height = canvas.clientHeight || 340;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    let bodyX = width * 0.5;
    let bodyY = height * 0.5;
    let bodyAngle = -Math.PI / 6;
    let velX = 0;
    let velY = 0;

    let pointerX = width * 0.58;
    let pointerY = height * 0.45;
    let isPointerInside = false;
    let elapsedTime = 0;

    const legAngles = [
      -0.95, -0.5, 0.5, 0.95, // right side angles relative to forward
      -0.95, -0.5, 0.5, 0.95, // left side
    ];

    const legs: LegState[] = legAngles.map((offset, idx) => {
      const side: 1 | -1 = idx < 4 ? 1 : -1;
      const spreadAngle = side === 1 ? offset + Math.PI / 2 : -offset - Math.PI / 2;
      const restDist = idx % 4 === 1 || idx % 4 === 2 ? 78 : 88;
      const fx = bodyX + Math.cos(bodyAngle + spreadAngle) * restDist;
      const fy = bodyY + Math.sin(bodyAngle + spreadAngle) * restDist;
      return {
        baseAngle: spreadAngle,
        side,
        restDist,
        footX: fx,
        footY: fy,
        stepStartX: fx,
        stepStartY: fy,
        stepTargetX: fx,
        stepTargetY: fy,
        stepProgress: 1,
        isStepping: false,
      };
    });

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
      isPointerInside = true;
    };

    const handlePointerLeave = () => {
      isPointerInside = false;
    };

    const handleClick = (e: MouseEvent) => {
      if (prefersReducedMotion) {
        const rect = canvas.getBoundingClientRect();
        bodyX = e.clientX - rect.left;
        bodyY = e.clientY - rect.top;
      }
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);
    canvas.addEventListener('click', handleClick);

    let animId = 0;
    let lastTime = performance.now();
    let lastTelemetryTime = 0;

    const stepFrame = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsedTime += dt;

      if (!prefersReducedMotion) {
        if (!isPointerInside) {
          // Gentle autonomous figure-8 patrol when idle
          pointerX = width * 0.5 + Math.cos(elapsedTime * 0.65) * (width * 0.24);
          pointerY = height * 0.5 + Math.sin(elapsedTime * 1.3) * (height * 0.17);
        }

        const dx = pointerX - bodyX;
        const dy = pointerY - bodyY;
        const dist = Math.hypot(dx, dy);

        // Spring-damped follow with comfortable stopping threshold
        const targetSpeed = dist > 18 ? Math.min(dist * 2.2, 220) : 0;
        const desiredVx = dist > 1 ? (dx / dist) * targetSpeed : 0;
        const desiredVy = dist > 1 ? (dy / dist) * targetSpeed : 0;

        velX += (desiredVx - velX) * Math.min(1, dt * 6);
        velY += (desiredVy - velY) * Math.min(1, dt * 6);

        bodyX += velX * dt;
        bodyY += velY * dt;

        const speed = Math.hypot(velX, velY);
        if (speed > 4) {
          const targetAngle = Math.atan2(velY, velX);
          let diff = targetAngle - bodyAngle;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          bodyAngle += diff * Math.min(1, dt * 6.5);
        }

        // Update stepping gait: keep alternating gait stability
        const activeSteps = legs.filter((l) => l.isStepping).length;
        for (let i = 0; i < legs.length; i++) {
          const leg = legs[i];
          const idealAngle = bodyAngle + leg.baseAngle;
          const leadX = velX * 0.18;
          const leadY = velY * 0.18;
          const idealX = bodyX + Math.cos(idealAngle) * leg.restDist + leadX;
          const idealY = bodyY + Math.sin(idealAngle) * leg.restDist + leadY;

          if (leg.isStepping) {
            leg.stepProgress += dt * 7.2;
            if (leg.stepProgress >= 1) {
              leg.stepProgress = 1;
              leg.isStepping = false;
              leg.footX = leg.stepTargetX;
              leg.footY = leg.stepTargetY;
            } else {
              const t = 1 - Math.pow(1 - leg.stepProgress, 3);
              leg.footX = leg.stepStartX + (leg.stepTargetX - leg.stepStartX) * t;
              leg.footY = leg.stepStartY + (leg.stepTargetY - leg.stepStartY) * t;
            }
          } else {
            const err = Math.hypot(idealX - leg.footX, idealY - leg.footY);
            if (err > 30 && activeSteps < 4) {
              leg.isStepping = true;
              leg.stepProgress = 0;
              leg.stepStartX = leg.footX;
              leg.stepStartY = leg.footY;
              leg.stepTargetX = idealX;
              leg.stepTargetY = idealY;
            }
          }
        }

        if (telemetryRef.current && now - lastTelemetryTime > 80) {
          lastTelemetryTime = now;
          telemetryRef.current({
            x: Math.round(bodyX),
            y: Math.round(bodyY),
            speed: Math.round(speed),
          });
        }
      } else {
        // Static placement in reduced motion
        for (const leg of legs) {
          const idealAngle = bodyAngle + leg.baseAngle;
          leg.footX = bodyX + Math.cos(idealAngle) * leg.restDist;
          leg.footY = bodyY + Math.sin(idealAngle) * leg.restDist;
        }
      }

      // Draw frame
      const isDark = themeRef.current === 'dark';
      const bg = isDark ? '#17181C' : '#FAFAF8';
      const gridColor = isDark ? 'rgba(255, 255, 255, 0.045)' : 'rgba(32, 33, 36, 0.055)';
      const guideColor = isDark ? 'rgba(130, 157, 187, 0.35)' : 'rgba(130, 157, 187, 0.45)';
      const legStroke = isDark ? '#E4E4E7' : '#202124';
      const accent = isDark ? '#A99AD4' : '#8875B9';
      const secondaryAccent = '#829DBB';

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Architectural coordinate grid
      const step = 32;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = step; x < width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = step; y < height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Optional vector guides & target crosshair
      if (guidesRef.current) {
        ctx.strokeStyle = guideColor;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(bodyX, bodyY);
        ctx.lineTo(pointerX, pointerY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Target pointer reticle
        ctx.strokeStyle = secondaryAccent;
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.arc(pointerX, pointerY, 8, 0, Math.PI * 2);
        ctx.moveTo(pointerX - 13, pointerY);
        ctx.lineTo(pointerX - 5, pointerY);
        ctx.moveTo(pointerX + 5, pointerY);
        ctx.lineTo(pointerX + 13, pointerY);
        ctx.moveTo(pointerX, pointerY - 13);
        ctx.lineTo(pointerX, pointerY - 5);
        ctx.moveTo(pointerX, pointerY + 5);
        ctx.lineTo(pointerX, pointerY + 13);
        ctx.stroke();
      }

      // Draw 8 articulated spider legs with 2-bone IK
      for (let i = 0; i < legs.length; i++) {
        const leg = legs[i];
        const socketOffsetAngle = bodyAngle + leg.baseAngle * 0.7;
        const rootX = bodyX + Math.cos(socketOffsetAngle) * 12;
        const rootY = bodyY + Math.sin(socketOffsetAngle) * 12;

        const bendDir = leg.side === 1 ? -1 : 1;
        const {jointX, jointY, endX, endY} = solveTwoBoneIK(
          rootX,
          rootY,
          leg.footX,
          leg.footY,
          46,
          54,
          bendDir
        );

        // Anchor footprint ring
        if (guidesRef.current) {
          ctx.fillStyle = leg.isStepping ? accent : secondaryAccent;
          ctx.globalAlpha = leg.isStepping ? 0.75 : 0.4;
          ctx.beginPath();
          ctx.arc(endX, endY, leg.isStepping ? 3.5 : 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        // Femur & Tibia segments
        ctx.strokeStyle = legStroke;
        ctx.lineWidth = 1.75;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(rootX, rootY);
        ctx.lineTo(jointX, jointY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Joint articulation node
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(jointX, jointY, 2.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw abdomen & cephalothorax in minimal geometric style
      ctx.save();
      ctx.translate(bodyX, bodyY);
      ctx.rotate(bodyAngle);

      // Abdomen
      ctx.fillStyle = isDark ? '#22242A' : '#FFFFFF';
      ctx.strokeStyle = legStroke;
      ctx.lineWidth = 1.75;
      ctx.beginPath();
      ctx.ellipse(-14, 0, 12, 9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Cephalothorax
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(4, 0, 8.5, 0, Math.PI * 2);
      ctx.fill();

      // Minimal eye dots
      ctx.fillStyle = isDark ? '#17181C' : '#FFFFFF';
      ctx.beginPath();
      ctx.arc(9, -2.6, 1.4, 0, Math.PI * 2);
      ctx.arc(9, 2.6, 1.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      ctx.restore();

      animId = requestAnimationFrame(stepFrame);
    };

    animId = requestAnimationFrame(stepFrame);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Interactive spider inverse kinematics coordinate canvas"
      className={`block h-full w-full cursor-crosshair touch-none ${className}`}
    />
  );
}
