import React, { useState, useEffect } from 'react';
import { GitBranch, Star, ExternalLink, Terminal, Radio } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { sound } from '../lib/sound';

interface RepoData {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const GithubTelemetry: React.FC = () => {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusText, setStatusText] = useState('UPLINK CONNECTING...');

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/ylevytskyy/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('API limit or network error');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
          setStatusText('CYBERDYNE NEURAL UPLINK SYNCHRONIZED');
        } else {
          throw new Error('No data');
        }
      } catch {
        // Fallback to static verified open source highlights
        setRepos(
          PROFILE.openSourceHighlights.map((r) => ({
            name: r.name,
            html_url: `https://github.com/${r.repo}`,
            description: r.desc,
            stargazers_count: 5,
            forks_count: 1,
            language: r.language
          }))
        );
        setStatusText('OFFLINE CACHE LOADED (RATE LIMIT SHIELD)');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--theme-border)] pb-2">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-[var(--theme-primary)] animate-pulse" />
          <h2 className="text-sm font-bold tracking-widest text-[var(--theme-primary)] text-glow">
            TELEMETRY / GITHUB UPLINK (@ylevytskyy)
          </h2>
        </div>
        <div className="text-[11px] font-mono text-[var(--theme-text)] opacity-80 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
          {statusText}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            data-target-name={`REPO: ${repo.name}`}
            onMouseEnter={() => sound.playBlip()}
            className="hud-box p-4 rounded block transition-all group hover:scale-[1.01]"
          >
            <div className="hud-corner hud-corner-tl" />
            <div className="hud-corner hud-corner-tr" />
            <div className="hud-corner hud-corner-bl" />
            <div className="hud-corner hud-corner-br" />

            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[var(--theme-text-bright)] group-hover:text-[var(--theme-primary)] flex items-center gap-1.5 transition-colors">
                <GitBranch className="w-4 h-4 text-[var(--theme-primary)]" />
                {repo.name}
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity text-[var(--theme-primary)]" />
            </div>

            <p className="text-xs text-[var(--theme-text)] opacity-80 mb-3 line-clamp-3 leading-relaxed">
              {repo.description || 'Public repository source module.'}
            </p>

            <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[var(--theme-border)] opacity-70 group-hover:opacity-100">
              <span className="px-2 py-0.5 rounded bg-[var(--theme-primary-dim)] text-[var(--theme-primary)] border border-[var(--theme-border)] font-mono text-[10px]">
                {repo.language || 'Code'}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitBranch className="w-3 h-3 text-cyan-400" />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
