<script lang="ts">
  import Icon from "@iconify/svelte";
  import SectionHeading from "$lib/SectionHeading.svelte";
  import { reveal } from "$lib/anim/reveal";

  const experience = [
    {
      title: "Python Developer and Data Engineer",
      org: "Bronstein, Gewirtz & Grossman, LLC",
      orgIcon: "tabler:building",
      location: "New York, United States · Remote",
      date: "Jul 2026 – Present",
      current: true,
      bullets: [
        "Design and maintain the data infrastructure and backend systems supporting the firm's operations, building ETL pipelines and RESTful APIs to keep critical workflows running reliably.",
        "Apply data engineering, automation, and database management expertise to develop scalable Python solutions that improve efficiency and ensure data integrity across the firm's technology infrastructure.",
      ],
    },
    {
      title: "Software Developer Intern",
      org: "UPLB Interdisciplinary Studies Center for Integrated Natural Resources and Environment Management",
      orgIcon: "tabler:building",
      location: "Laguna, Philippines · Hybrid",
      date: "Jun 2025 – Jul 2025",
      current: false,
      bullets: [
        "Collaborated directly with research scientists to automate their data workflows, engineering an ML data-parsing web app that cut manual reporting time by 90%.",
        "Managed internal databases and presented live analytics reports to executive leadership, successfully driving the official adoption of the tool for strategic planning.",
      ],
    },
    {
      title: "Resident Member",
      org: "Young Software Engineers' Society",
      orgIcon: "tabler:users",
      location: "UP Los Baños",
      date: "Sep 2024 – Jul 2026",
      current: false,
      bullets: [
        "Spearheaded development of the YSYNC applicant management system to automate data tracking for 80+ candidates while co-organizing operational events for 50+ active members.",
      ],
    },
  ];

  const skills = [
    {
      title: "Languages",
      icon: "tabler:device-desktop-code",
      accent: "var(--softdev-color)",
      items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Bash', 'SQL'],
    },
    {
      title: "Frameworks & Tools",
      icon: "tabler:tool",
      accent: "var(--softdev-color)",
      items: ['SvelteKit', 'Next.js', 'React', 'Django', 'Express.js', 'Node.js', 'Supabase', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx', 'Gunicorn', 'Git', 'TensorFlow', 'BERT', 'RESTful APIs'],
    },
    {
      title: "Cybersecurity",
      icon: "tabler:shield-lock",
      accent: "var(--cyber-color)",
      items: ['Linux (Kali, Ubuntu)', 'Wazuh SIEM', 'IDS/EDR', 'Vulnerability Assessment', 'Penetration Testing', 'OWASP', 'Metasploit', 'Nmap', 'Networking (TCP/IP, DNS)'],
    },
    {
      title: "Certifications & Labs",
      icon: "tabler:certificate",
      accent: "var(--both-color)",
      items: ['ISC2 CC (Expected 2026)', 'Google Cybersecurity Certificate', 'SEED Framework Labs', 'CTF Competitions'],
    },
  ];
</script>

<svelte:head>
  <title>About — Klenn Jakek Borja</title>
</svelte:head>

<div class="page reveal" {@attach reveal()}>
  <h1>About</h1>

  <p class="lead">
    I'm Klenn Jakek Borja — a <strong>Python Developer and Data Engineer</strong> at
    Bronstein, Gewirtz &amp; Grossman, LLC, and a UPLB Computer Science graduate
    (<strong>Magna Cum Laude</strong>) with a dual focus on <strong>systems/cybersecurity</strong>
    and <strong>full-stack software engineering</strong>. I got hooked on programming by wanting
    to understand how things work under the hood, and that curiosity has never left. Outside of
    code I enjoy CTFs, homelab tinkering, open-source, and Linux rabbit holes.
  </p>

  <!-- Education -->
  <div class="section-gap">
    <SectionHeading number="01" title="Education" />

    <div class="edu card-anchor">
      <div class="edu-head">
        <Icon icon="tabler:school" width="20" height="20" />
        <span class="edu-degree">B.S. Computer Science</span>
        <span class="edu-honor">Magna Cum Laude</span>
      </div>
      <p class="edu-school">
        University of the Philippines Los Baños
        <span class="edu-dot">·</span>
        <span class="edu-year">July 2026</span>
      </p>

      <div class="edu-stats">
        <div class="edu-stat">
          <span class="es-val">1.4418</span>
          <span class="es-key">General Weighted Average</span>
        </div>
        <div class="edu-stat">
          <span class="es-val">Top 10%</span>
          <span class="es-key">Honor Society of the Philippines Nominee</span>
        </div>
        <div class="edu-stat">
          <span class="es-val">DOST-SEI</span>
          <span class="es-key">Merit Scholar</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Experience -->
  <div class="section-gap">
    <SectionHeading number="02" title="Experience" />

    <div class="timeline reveal" {@attach reveal({ step: 70 })}>
      {#each experience as job}
        <div class="tl-item">
          <span class="tl-node" class:tl-node-live={job.current} aria-hidden="true"></span>

          <div class="card-anchor card card-content">
            <div class="exp-header">
              <div>
                <div class="card-title exp-title">{job.title}</div>
                <div class="exp-org">
                  <Icon icon={job.orgIcon} width="14" height="14" />
                  <span>{job.org}</span>
                </div>
                <div class="exp-loc">{job.location}</div>
              </div>
              <span class="exp-date" class:exp-date-live={job.current}>{job.date}</span>
            </div>

            <ul class="exp-bullets">
              {#each job.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Skills -->
  <div class="section-gap">
    <SectionHeading number="03" title="Skills" />

    <div class="cardset grid reveal" {@attach reveal({ step: 60 })}>
      {#each skills as group}
        <div class="card-anchor card card-content" style="--card-accent: {group.accent};">
          <div class="card-title skill-title">
            <Icon icon={group.icon} width="20" height="20" />
            {group.title}
          </div>
          <div class="tags">
            {#each group.items as s}
              <span class="tag">{s}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* ── Education ── */
  .edu {
    max-width: 46rem;
  }

  .edu-head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5em;
    color: var(--green);
  }

  .edu-degree {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text-main);
  }

  .edu-honor {
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--green);
    background: var(--green-soft);
    border: 1px solid color-mix(in srgb, var(--green) 30%, transparent);
    border-radius: var(--radius-pill);
    padding: 0.3em 0.75em;
    box-shadow: inset 0 0 14px color-mix(in srgb, var(--green) 10%, transparent);
  }

  .edu-school {
    margin: 0.5em 0 0;
    font-size: var(--fs-sm);
    font-weight: 600;
    color: var(--text-muted);
  }

  .edu-dot { color: var(--border-strong); margin: 0 0.2em; }
  .edu-year { font-family: var(--font-mono); font-size: var(--fs-xs); }

  .edu-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1.35rem;
    padding-top: 1.35rem;
    border-top: 1px solid var(--border);
  }

  .edu-stat {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }

  .es-val {
    font-family: var(--font-mono);
    font-size: 1.35rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--green);
    text-shadow: 0 0 20px color-mix(in srgb, var(--green) 30%, transparent);
  }

  .es-key {
    font-size: var(--fs-2xs);
    line-height: 1.45;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 600;
  }

  @media screen and (max-width: 620px) {
    .edu-stats { grid-template-columns: 1fr; gap: 0.9rem; }
    .es-val { font-size: 1.15rem; }
  }

  /* ── Experience timeline ── */
  .timeline {
    position: relative;
    padding-left: 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* The rail. Fades downward so the most recent role reads as the anchor. */
  .timeline::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 1.9rem;
    bottom: 1.9rem;
    width: 2px;
    border-radius: 2px;
    background: linear-gradient(
      to bottom,
      var(--green),
      color-mix(in srgb, var(--green) 45%, transparent) 45%,
      color-mix(in srgb, var(--green) 8%, transparent)
    );
  }

  .tl-item { position: relative; }

  .tl-node {
    position: absolute;
    left: -2.25rem;
    top: 1.6rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--bg-canvas);
    border: 2px solid color-mix(in srgb, var(--green) 55%, transparent);
    z-index: 1;
  }

  /* Current role: filled, glowing, and breathing — so "where he is now" is
     readable at a glance without a label. */
  .tl-node-live {
    background: var(--green);
    border-color: var(--green);
    box-shadow: 0 0 0 4px var(--green-soft), 0 0 16px var(--green);
    animation: node-pulse 2.4s ease-in-out infinite;
  }

  @keyframes node-pulse {
    0%, 100% { box-shadow: 0 0 0 4px var(--green-soft), 0 0 16px var(--green); }
    50%      { box-shadow: 0 0 0 7px transparent, 0 0 22px var(--green); }
  }

  .exp-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1em;
    flex-wrap: wrap;
  }

  .exp-title {
    font-size: 1.05em;
    letter-spacing: -0.015em;
  }

  .exp-org {
    display: flex;
    align-items: flex-start;
    gap: 0.4em;
    font-size: var(--fs-sm);
    font-weight: 600;
    color: var(--text-muted);
    margin-top: 0.3em;
    line-height: 1.45;
    max-width: 42rem;
  }

  .exp-loc {
    font-size: var(--fs-2xs);
    color: var(--text-muted);
    opacity: 0.75;
    margin-top: 0.3em;
    letter-spacing: 0.02em;
  }

  .exp-date {
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    color: var(--text-muted);
    white-space: nowrap;
    letter-spacing: 0.04em;
    padding-top: 0.3em;
    flex-shrink: 0;
  }

  .exp-date-live {
    color: var(--green);
    font-weight: 600;
  }

  .exp-bullets {
    margin: 0.35rem 0 0;
    padding-left: 1.15em;
    font-size: var(--fs-sm);
    line-height: 1.75;
    color: var(--text-muted);
    display: flex;
    flex-direction: column;
    gap: 0.45em;
  }

  .exp-bullets li::marker { color: var(--green); }

  @media screen and (max-width: 560px) {
    .timeline { padding-left: 1.5rem; }
    .timeline::before { left: 5px; }
    .tl-node {
      left: -1.5rem;
      width: 12px;
      height: 12px;
      top: 1.45rem;
    }
  }

  /* ── Skills ── */
  .skill-title {
    font-size: 1.02rem;
    color: var(--card-accent, var(--green));
  }
</style>
