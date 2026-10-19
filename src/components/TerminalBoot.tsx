import React, { useState } from 'react';
import { Terminal as TerminalIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { sound } from '../lib/sound';

export const TerminalBoot: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const logs = [
    'CYBERDYNE SYSTEMS BIOS v2.6.4 ... OK',
    'CPU: 6502 NEURAL NET PROCESSOR (LEARNING CAPABLE) ... ONLINE',
    'EXPERIENCE MATRIX: 28 YEARS SOFTWARE ENGINEERING ... LOADED',
    'PRIMARY STACK: REACT NATIVE / EXPO / NESTJS / LARAVEL / WEBRTC ... ACTIVE',
    'COMMUNICATION PROTOCOLS: SIP / ASTERISK / WEBSOCKETS / SSE ... INITIALIZED',
    'QUALITY GATE: 100% TEST-DRIVEN DEVELOPMENT & MUTATION FALSIFICATION ... ENGAGED',
    'MISSION PARAMETER: DELIVER BULLETPROOF DISTRIBUTED & MOBILE PLATFORMS',
    'STATUS: FULL OPERATIONAL READINESS'
  ];

  return (
    <div
      data-target-name="CYBERDYNE SYSTEM DIAGNOSTICS"
      className="hud-box p-4 rounded text-xs font-mono mb-8"
    >
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />

      <div className="flex items-center justify-between border-b border-[var(--theme-border)] pb-2 mb-3">
        <div className="flex items-center gap-2 text-[var(--theme-primary)] font-bold">
          <TerminalIcon className="w-4 h-4" />
          <span>CYBERDYNE SYSTEM DIAGNOSTICS (MODEL T-800)</span>
        </div>
        <button
          onClick={() => {
            setExpanded(!expanded);
            sound.playClick();
          }}
          className="flex items-center gap-1 text-[11px] opacity-75 hover:opacity-100 hover:text-[var(--theme-primary)]"
        >
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          <span>{expanded ? 'COLLAPSE' : 'EXPAND LOGS'}</span>
        </button>
      </div>

      <div className="space-y-1 text-[var(--theme-text)]">
        {(expanded ? logs : logs.slice(0, 3)).map((line, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-[var(--theme-primary)] font-bold">{'>'}</span>
            <span className={idx === logs.length - 1 ? 'text-[var(--theme-text-bright)] font-bold' : ''}>
              {line}
            </span>
          </div>
        ))}
        {!expanded && (
          <div className="text-[10px] opacity-60 italic pt-1">
            ... 5 additional system diagnostics hidden (click EXPAND LOGS to inspect)
          </div>
        )}
      </div>
    </div>
  );
};
