import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Flower2, Layers, EyeOff } from 'lucide-react';

export type ParticleMode = 'gold' | 'petals' | 'mix' | 'off';

interface LuxuryParticlesBackgroundProps {
  initialMode?: ParticleMode;
  showControlBadge?: boolean;
}

interface GoldParticle {
  type: 'gold';
  x: number;
  y: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  speedY: number;
  speedX: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  shape: 'star' | 'circle' | 'flake';
  rotation: number;
  rotSpeed: number;
}

interface PetalParticle {
  type: 'petal';
  x: number;
  y: number;
  size: number;
  alpha: number;
  speedY: number;
  swaySpeed: number;
  swayAmp: number;
  swayOffset: number;
  rotation: number;
  rotSpeed: number;
  flipSpeed: number;
  flipAngle: number;
  colorType: 'deep-red' | 'velvet-rose' | 'rose-gold' | 'burgundy';
}

type Particle = GoldParticle | PetalParticle;

export const LuxuryParticlesBackground: React.FC<LuxuryParticlesBackgroundProps> = ({
  initialMode = 'mix',
  showControlBadge = true,
}) => {
  const [mode, setMode] = useState<ParticleMode>(initialMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (mode === 'off') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create particles based on active mode
    const particles: Particle[] = [];
    const maxGoldCount = mode === 'mix' ? 45 : mode === 'gold' ? 70 : 0;
    const maxPetalCount = mode === 'mix' ? 22 : mode === 'petals' ? 38 : 0;

    const createGoldParticle = (randomY = true): GoldParticle => ({
      type: 'gold',
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -20,
      size: Math.random() * 2.5 + 1.2,
      alpha: Math.random() * 0.7 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.3,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.35,
      twinkleSpeed: Math.random() * 0.03 + 0.015,
      twinkleOffset: Math.random() * Math.PI * 2,
      shape: Math.random() > 0.65 ? 'star' : Math.random() > 0.4 ? 'flake' : 'circle',
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
    });

    const createPetalParticle = (randomY = true): PetalParticle => {
      const colors: PetalParticle['colorType'][] = [
        'deep-red',
        'velvet-rose',
        'rose-gold',
        'burgundy',
      ];
      return {
        type: 'petal',
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -30,
        size: Math.random() * 8 + 9, // 9px to 17px
        alpha: Math.random() * 0.4 + 0.45,
        speedY: Math.random() * 0.8 + 0.5,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmp: Math.random() * 1.5 + 0.8,
        swayOffset: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.018,
        flipSpeed: Math.random() * 0.03 + 0.015,
        flipAngle: Math.random() * Math.PI * 2,
        colorType: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Initialize particles
    for (let i = 0; i < maxGoldCount; i++) {
      particles.push(createGoldParticle(true));
    }
    for (let i = 0; i < maxPetalCount; i++) {
      particles.push(createPetalParticle(true));
    }

    let time = 0;

    // Drawing Helpers
    const drawStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
      alpha: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      c.save();
      c.beginPath();
      c.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        c.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        c.lineTo(x, y);
        rot += step;
      }
      c.lineTo(cx, cy - outerRadius);
      c.closePath();
      c.fillStyle = `rgba(245, 230, 169, ${alpha})`;
      c.shadowColor = 'rgba(212, 175, 55, 0.8)';
      c.shadowBlur = 6;
      c.fill();
      c.restore();
    };

    const drawPetal = (
      c: CanvasRenderingContext2D,
      p: PetalParticle
    ) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);

      // 3D flip flutter simulation via scale
      const flipScale = Math.sin(p.flipAngle);
      c.scale(1, Math.abs(flipScale) * 0.85 + 0.15);

      c.beginPath();
      c.moveTo(0, -p.size);
      // Realistic organic petal curve
      c.bezierCurveTo(p.size * 0.8, -p.size * 0.7, p.size * 1.1, p.size * 0.5, 0, p.size);
      c.bezierCurveTo(-p.size * 1.1, p.size * 0.5, -p.size * 0.8, -p.size * 0.7, 0, -p.size);
      c.closePath();

      // Colors by type
      let grad = c.createLinearGradient(-p.size, -p.size, p.size, p.size);
      if (p.colorType === 'deep-red') {
        grad.addColorStop(0, `rgba(180, 20, 50, ${p.alpha})`);
        grad.addColorStop(0.5, `rgba(120, 10, 30, ${p.alpha * 0.95})`);
        grad.addColorStop(1, `rgba(70, 5, 18, ${p.alpha * 0.85})`);
      } else if (p.colorType === 'velvet-rose') {
        grad.addColorStop(0, `rgba(210, 40, 75, ${p.alpha})`);
        grad.addColorStop(0.6, `rgba(150, 20, 50, ${p.alpha * 0.95})`);
        grad.addColorStop(1, `rgba(90, 10, 28, ${p.alpha * 0.85})`);
      } else if (p.colorType === 'rose-gold') {
        grad.addColorStop(0, `rgba(235, 170, 150, ${p.alpha})`);
        grad.addColorStop(0.5, `rgba(185, 100, 90, ${p.alpha * 0.9})`);
        grad.addColorStop(1, `rgba(140, 50, 50, ${p.alpha * 0.85})`);
      } else {
        // Burgundy
        grad.addColorStop(0, `rgba(140, 15, 40, ${p.alpha})`);
        grad.addColorStop(0.7, `rgba(85, 8, 24, ${p.alpha * 0.9})`);
        grad.addColorStop(1, `rgba(50, 4, 15, ${p.alpha * 0.8})`);
      }

      c.fillStyle = grad;
      c.shadowColor = 'rgba(0, 0, 0, 0.35)';
      c.shadowBlur = 4;
      c.shadowOffsetY = 2;
      c.fill();

      // Subtle delicate center vein highlight
      c.beginPath();
      c.moveTo(0, -p.size * 0.75);
      c.quadraticCurveTo(p.size * 0.1, 0, 0, p.size * 0.8);
      c.strokeStyle = `rgba(255, 230, 230, ${p.alpha * 0.25})`;
      c.lineWidth = 0.7;
      c.stroke();

      c.restore();
    };

    // Render loop
    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        if (p.type === 'gold') {
          // Update gold particle
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(time * 0.01 + p.twinkleOffset) * 0.25;
          p.rotation += p.rotSpeed;
          p.alpha =
            p.baseAlpha + Math.sin(time * p.twinkleSpeed + p.twinkleOffset) * 0.3;

          // Draw gold particle
          if (p.shape === 'star') {
            drawStar(ctx, p.x, p.y, 4, p.size * 2, p.size * 0.6, Math.max(0.1, p.alpha));
          } else if (p.shape === 'flake') {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillStyle = `rgba(225, 190, 80, ${Math.max(0.1, p.alpha)})`;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.moveTo(-p.size, 0);
            ctx.lineTo(0, -p.size * 1.5);
            ctx.lineTo(p.size, 0);
            ctx.lineTo(0, p.size * 1.5);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          } else {
            // Glowing round gold bokeh
            ctx.save();
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(240, 210, 110, ${Math.max(0.1, p.alpha)})`;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.9)';
            ctx.shadowBlur = 5;
            ctx.fill();
            ctx.restore();
          }

          // Respawn at top
          if (p.y > height + 20 || p.x < -20 || p.x > width + 20) {
            particles[idx] = createGoldParticle(false);
          }
        } else if (p.type === 'petal') {
          // Update petal
          p.y += p.speedY;
          p.x += Math.sin(time * p.swaySpeed + p.swayOffset) * p.swayAmp;
          p.rotation += p.rotSpeed;
          p.flipAngle += p.flipSpeed;

          // Draw petal
          drawPetal(ctx, p);

          // Respawn at top
          if (p.y > height + 40 || p.x < -40 || p.x > width + 40) {
            particles[idx] = createPetalParticle(false);
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  return (
    <>
      {/* Fixed Canvas Layer */}
      {mode !== 'off' && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-10 pointer-events-none w-full h-full"
          style={{ mixBlendMode: 'screen', opacity: 0.92 }}
        />
      )}

      {/* Floating Mode Toggle Control */}
      {showControlBadge && (
        <div className="fixed bottom-6 left-6 z-40">
          <div className="relative">
            {/* Popover Menu */}
            {isMenuOpen && (
              <div 
                className="absolute bottom-12 left-0 w-52 bg-[#0c1018]/95 backdrop-blur-xl border border-[#d4af37]/40 rounded-2xl p-2 shadow-2xl space-y-1 mb-2 text-right animate-fadeIn"
                dir="rtl"
              >
                <div className="px-3 py-1.5 border-b border-white/10 text-[11px] font-bold text-[#f5e7a9] font-serif">
                  مؤثرات الاحتفال الملكي
                </div>

                <button
                  onClick={() => {
                    setMode('mix');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                    mode === 'mix'
                      ? 'bg-[#d4af37]/20 text-[#f5e7a9] border border-[#d4af37]/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Layers size={14} className="text-[#d4af37]" />
                    <span>مزيج ملكي (ذهب وورد)</span>
                  </span>
                  {mode === 'mix' && <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                </button>

                <button
                  onClick={() => {
                    setMode('gold');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                    mode === 'gold'
                      ? 'bg-[#d4af37]/20 text-[#f5e7a9] border border-[#d4af37]/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles size={14} className="text-[#d4af37]" />
                    <span>جزيئات الذهب اللامعة</span>
                  </span>
                  {mode === 'gold' && <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                </button>

                <button
                  onClick={() => {
                    setMode('petals');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                    mode === 'petals'
                      ? 'bg-rose-900/30 text-rose-200 border border-rose-500/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Flower2 size={14} className="text-rose-400" />
                    <span>تساقط بتلات الورد</span>
                  </span>
                  {mode === 'petals' && <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />}
                </button>

                <button
                  onClick={() => {
                    setMode('off');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                    mode === 'off'
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <EyeOff size={14} />
                    <span>إيقاف المؤثرات</span>
                  </span>
                  {mode === 'off' && <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />}
                </button>
              </div>
            )}

            {/* Trigger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0b0e14]/90 hover:bg-[#131824] border border-[#d4af37]/40 shadow-xl text-xs text-[#f5e7a9] backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="تخصيص تساقط الورد وجزيئات الذهب"
            >
              {mode === 'petals' ? (
                <Flower2 size={15} className="text-rose-400 animate-spin" style={{ animationDuration: '8s' }} />
              ) : mode === 'gold' ? (
                <Sparkles size={15} className="text-[#d4af37] animate-pulse" />
              ) : mode === 'mix' ? (
                <Layers size={15} className="text-[#d4af37]" />
              ) : (
                <EyeOff size={15} className="text-gray-400" />
              )}
              <span className="hidden sm:inline font-serif">
                {mode === 'petals'
                  ? 'بتلات الورد'
                  : mode === 'gold'
                  ? 'جزيئات الذهب'
                  : mode === 'mix'
                  ? 'المؤثرات الملكية'
                  : 'المؤثرات متوقفة'}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
