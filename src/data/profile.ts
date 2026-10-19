// Profile facts verified against master.md and profiles/fullstack.md
// Strictly adheres to NDA: public descriptors only, no confidential client names.

export interface ProjectShowcase {
  id: string;
  codename: string;
  title: string;
  subtitle: string;
  period: string;
  tech: string[];
  metrics: string[];
  description: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  code: string;
  skills: string[];
}

export const PROFILE = {
  name: "Yuriy Levytskyy",
  designation: "CYBERNETIC UNIT / SENIOR FULL-STACK ARCHITECT",
  title: "Senior Full-Stack Engineer — React Native/Expo · NestJS/Laravel · WebRTC/SIP · TypeScript",
  location: "Lviv, Ukraine (Remote)",
  email: "levytskyy@gmail.com",
  phone: "+380 97 342 42 29",
  linkedin: "https://www.linkedin.com/in/ylevytskyy/",
  github: "https://github.com/ylevytskyy",
  yearsExperience: "28",
  summary:
    "Senior Full-Stack Engineer with 28 years in software engineering, including 14 years shipping production mobile and distributed systems. Specialized in pairing high-performance cross-platform clients (React Native/Expo, React, TypeScript) with event-driven backends (NestJS, Node.js, Laravel, PostgreSQL, Redis) and real-time communication pipelines (WebRTC, SIP, Asterisk). Disciplined TDD practitioner and daily user of AI-assisted engineering workflows.",
  education: {
    degree: "Master's Degree in Computer Science (System Engineer)",
    institution: "Lviv Polytechnic National University",
    years: "1995 – 2000"
  },
  languages: [
    { name: "Ukrainian", level: "Native" },
    { name: "English", level: "Upper-Intermediate (B2+)" },
    { name: "Polish", level: "Good working proficiency" }
  ],
  skillCategories: [
    {
      category: "Mobile & Frontend",
      code: "MODULE-01:CLIENT",
      skills: ["React Native", "Expo (SDK 52–57)", "Expo Router", "TypeScript", "React 19", "Next.js", "Zustand", "NativeWind", "Swift", "Kotlin"]
    },
    {
      category: "Backend & Distributed Systems",
      code: "MODULE-02:CORE",
      skills: ["NestJS", "Node.js", "PHP 8.3 / Laravel", "PostgreSQL", "TypeORM / Prisma", "Redis", "BullMQ", "Temporal SDK", "Docker", "AWS ECS Fargate"]
    },
    {
      category: "Real-Time & Telephony",
      code: "MODULE-03:SIGNAL",
      skills: ["WebRTC", "SIP", "Asterisk 16/22", "ARI / AMI / CEL", "JsSIP", "LiveKit SFU", "CallKit / PushKit", "Server-Sent Events", "WebSockets"]
    },
    {
      category: "Architecture & Quality",
      code: "MODULE-04:DEFENSE",
      skills: ["Test-Driven Development (TDD)", "Jest", "Pest", "Vitest", "Double-Entry Ledgers", "Mutation Falsification", "Architecture Decision Records (ADRs)"]
    }
  ] as SkillCategory[],
  featuredProjects: [
    {
      id: "tas-telephony",
      codename: "PROJECT: CYBER-TAS",
      title: "B2B Telephony Bureau Platform & Engine",
      subtitle: "Multi-tenant telephone answering service bureau platform & provider-agnostic telephony engine",
      period: "Jul 2026 – Sep 2026",
      tech: ["Laravel 11-13", "Asterisk 22", "WebRTC", "JsSIP", "Pest", "React", "TypeScript"],
      metrics: [
        "15,000 monthly calls handled",
        "100% of 1,378 commits across 3 repos authored solo",
        "1,248 automated Pest tests with 4,594 assertions",
        "Exact ±0s CEL billing across 5 production topologies",
        "Sub-second WebRTC screen-pops at 163.54 ms p95 latency"
      ],
      description:
        "Architected the cloud monolith, real-time telephony core, and operator console solo. Replaced standard Asterisk CDR with Channel Event Logging (CEL) across multi-party ConfBridge calls, resolving billing drops for transferred channels."
    },
    {
      id: "ai-tutoring",
      codename: "PROJECT: NEURAL-TUTOR",
      title: "AI-Powered Tutoring & Analytics Platform",
      subtitle: "Full-stack dual-app and cloud backend ecosystem (115K LOC TypeScript)",
      period: "Jan 2023 – May 2026",
      tech: ["NestJS 11", "Expo", "Azure OpenAI", "Mathpix OCR", "PostgreSQL", "BullMQ", "Redis", "RxJS"],
      metrics: [
        "97.2% commits authored across ecosystem (115K LOC)",
        "Real-time streaming SSE pipeline with 60 fps Reanimated shimmer",
        "Dual-pipeline OCR: Mathpix LaTeX + Azure OpenAI Vision",
        "50% LLM cost cut via batch processing architecture"
      ],
      description:
        "Engineered an SSE response streaming pipeline in NestJS using RxJS subjects backed by Azure OpenAI, paired with multimodal assignment recognition (Mathpix OCR + Azure Vision) and a sliding-window rate-limiting quota engine."
    },
    {
      id: "fitness-marketplace",
      codename: "PROJECT: TITAN-FIT",
      title: "On-Demand Fitness & Sports Marketplace",
      subtitle: "Cross-platform mobile client & transactional backend operating in UK & UAE",
      period: "Dec 2025 – Present",
      tech: ["Expo SDK 54", "React Native", "Stripe Connect", "Spring Boot", "Java 17", "TypeScript"],
      metrics: [
        "4.6★ UK App Store rating",
        "90K+ LOC TypeScript across 48 routes, 72.7% code authored",
        "177 test files with 1,264 unit tests (90% coverage gate)",
        "Multi-region Stripe Connect payment & payout rollback pipeline"
      ],
      description:
        "Architected and shipped the cross-platform client from scratch with dynamic UK/UAE region keys and an automated two-phase booking rollback preventing orphaned reservations on payment failures."
    },
    {
      id: "emergency-dispatch",
      codename: "PROJECT: RAPID-RESPONSE",
      title: "On-Demand Field-Service & Emergency Trade Dispatch",
      subtitle: "Dual-sided marketplace on mobile and web (36K LOC, 62 screens)",
      period: "Jan 2025 – Sep 2026",
      tech: ["React Native", "CallKit / PushKit", "WebSockets", "Metro Bundler", "AI Dynamic Pricing"],
      metrics: [
        "Unified codebase across iOS, Android, and Web",
        "Competitive dispatch with instant call alarms via CallKit/PushKit",
        "AI dynamic pricing surfaced itemized fee breakdowns across 62 screens"
      ],
      description:
        "Shipped a unified React Native codebase across iOS, Android, and Web. Architected an emergency contractor dispatch engine pairing CallKit/PushKit with background WebSocket listeners that instantly cancel alarms when claimed."
    }
  ] as ProjectShowcase[],
  openSourceHighlights: [
    {
      name: "mac-cleaner",
      repo: "ylevytskyy/mac-cleaner",
      desc: "Interactive macOS developer-cache cleaner. Walks npm, yarn, pnpm, Homebrew, Xcode, Simulator, CocoaPods, Gradle, Android, Expo/Metro, pip, and Trash.",
      language: "Shell / Zsh"
    },
    {
      name: "gym-ai",
      repo: "ylevytskyy/gym-ai",
      desc: "Aura Fit — Cross-platform AI-assisted fitness system (React Native/Expo, NestJS, Supabase, LLM workout planner).",
      language: "TypeScript"
    },
    {
      name: "free-pbx",
      repo: "ylevytskyy/free-pbx",
      desc: "Dockerized FreePBX & Asterisk lab with WebRTC / SIP.js browser client.",
      language: "Docker / PHP"
    },
    {
      name: "SipSdk",
      repo: "ylevytskyy/SipSdk",
      desc: "Easy to use iOS SIP SDK based on baresip.",
      language: "Swift / Objective-C"
    },
    {
      name: "linux-cleaner",
      repo: "ylevytskyy/linux-cleaner",
      desc: "Disk-cleanup and service-taming scripts for Linux dev machines (Expo/RN, Android SDK, Docker, NestJS).",
      language: "Shell"
    }
  ]
};
