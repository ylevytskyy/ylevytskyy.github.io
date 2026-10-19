import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Eye, Shield, Crosshair, Terminal, Sparkles } from 'lucide-react';
import { sound } from '../lib/sound';

export const HUDControlBar: React.FC = () => {
  const [theme, setTheme] = useState<'t800' | 'cyber-blue' | 'human-clean'>('t800');
  const [soundOn, setSoundOn] = useState(false);
  const [scanlines, setScanlines] = useState(true);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().slice(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleThemeChange = (newTheme: 't800' | 'cyber-blue' | 'human-clean') => {
    setTheme(newTheme);
    const root = document.documentElement;
    if (newTheme === 't800') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', newTheme);
    }
    sound.playClick();
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    sound.setEnabled(next);
  };

  const toggleScanlines = () => {
    const next = !scanlines;
    setScanlines(next);
    const overlay = document.getElementById('crt-overlay-layer');
    if (overlay) {
      overlay.style.display = next ? 'block' : 'none';
    }
    sound.playClick();
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-[var(--theme-border)] px-4 py-2 text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Cyberdyne Logo & Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold tracking-wider text-[var(--theme-primary)] text-glow">
            <Crosshair className="w-4 h-4 animate-spin-slow" />
            <span>CYBERDYNE SYSTEMS</span>
            <span className="text-[var(--theme-text)] opacity-70">| T-800 v2.6</span>
          </div>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-[var(--theme-primary-dim)] text-[var(--theme-primary)] border border-[var(--theme-primary)]">
            CPU: 6502 NEURAL NET
          </span>
          <span className="text-[10px] opacity-75 font-mono hidden md:inline">
            SYS_TIME: {time}
          </span>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2">
          {/* Audio toggle */}
          <button
            onClick={toggleSound}
            title="Toggle Web Audio SFX"
            className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-colors ${
              soundOn
                ? 'bg-[var(--theme-primary-dim)] border-[var(--theme-primary)] text-[var(--theme-primary)] font-bold'
                : 'border-[var(--theme-border)] opacity-75 hover:opacity-100 text-[var(--theme-text)]'
            }`}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{soundOn ? 'SFX: ON' : 'SFX: MUTE'}</span>
          </button>

          {/* CRT toggle */}
          <button
            onClick={toggleScanlines}
            title="Toggle CRT Scanline Overlay"
            className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-colors ${
              scanlines
                ? 'bg-[var(--theme-primary-dim)] border-[var(--theme-primary)] text-[var(--theme-primary)]'
                : 'border-[var(--theme-border)] opacity-75 hover:opacity-100 text-[var(--theme-text)]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CRT</span>
          </button>

          {/* Theme switcher */}
          <div className="flex rounded border border-[var(--theme-border)] overflow-hidden">
            <button
              onClick={() => handleThemeChange('t800')}
              className={`px-2 py-1 font-mono transition-colors ${
                theme === 't800'
                  ? 'bg-[var(--theme-primary)] text-black font-bold'
                  : 'hover:bg-[var(--theme-primary-dim)] text-[var(--theme-text)]'
              }`}
            >
              T-800 RED
            </button>
            <button
              onClick={() => handleThemeChange('cyber-blue')}
              className={`px-2 py-1 font-mono transition-colors ${
                theme === 'cyber-blue'
                  ? 'bg-[#00e5ff] text-black font-bold'
                  : 'hover:bg-[var(--theme-primary-dim)] text-[var(--theme-text)]'
              }`}
            >
              CYBER
            </button>
            <button
              onClick={() => handleThemeChange('human-clean')}
              className={`px-2 py-1 font-mono transition-colors ${
                theme === 'human-clean'
                  ? 'bg-[#22c55e] text-black font-bold'
                  : 'hover:bg-[var(--theme-primary-dim)] text-[var(--theme-text)]'
              }`}
            >
              HUMAN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
