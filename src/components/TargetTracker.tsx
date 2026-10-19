import React, { useState, useEffect } from 'react';
import { Target, Cpu, CheckCircle } from 'lucide-react';
import { sound } from '../lib/sound';

export const TargetTracker: React.FC = () => {
  const [currentTarget, setCurrentTarget] = useState<string>('SYSTEM SCAN IDLE');
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [matchScore, setMatchScore] = useState<number>(99.4);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });

      // Check if mouse is over an element with data-target-name
      const elem = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-target-name]');
      if (elem) {
        const name = elem.getAttribute('data-target-name');
        if (name && name !== currentTarget) {
          setCurrentTarget(name);
          setMatchScore(98.0 + Math.random() * 1.9);
          sound.playTargetLock();
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [currentTarget]);

  return (
    <div className="fixed bottom-4 right-4 z-40 pointer-events-none hidden lg:block">
      <div className="hud-box p-3 rounded text-[11px] font-mono border border-[var(--theme-border-bright)] bg-opacity-95 shadow-lg backdrop-blur w-72">
        <div className="hud-corner hud-corner-tl" />
        <div className="hud-corner hud-corner-tr" />
        <div className="hud-corner hud-corner-bl" />
        <div className="hud-corner hud-corner-br" />

        <div className="flex items-center justify-between text-[var(--theme-primary)] font-bold mb-1.5 pb-1 border-b border-[var(--theme-border)]">
          <span className="flex items-center gap-1">
            <Target className="w-3.5 h-3.5 animate-pulse text-[var(--theme-primary)]" />
            TARGET ACQUISITION
          </span>
          <span className="text-[10px] text-green-400">TRACKING</span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="opacity-70">TARGET:</span>
            <span className="text-[var(--theme-text-bright)] font-semibold truncate max-w-[170px]">
              {currentTarget}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-70">MATCH ACCURACY:</span>
            <span className="text-[var(--theme-primary)] font-bold">{matchScore.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="opacity-70">OPTIC COORDS:</span>
            <span>X:{coords.x} Y:{coords.y}</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="opacity-70">THREAT ASSESSMENT:</span>
            <span className="text-emerald-400 font-bold">NULL / FRIENDLY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
