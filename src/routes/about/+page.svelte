<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>About — Klenn Jakek Borja</title>
</svelte:head>

<div class="page">
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
    <h2>Education</h2>
    <div class="card-anchor card card-content" style="margin-top:1em; max-width:42rem;">
      <div class="card-title" style="font-size:1.1em;">
        <Icon icon="tabler:school" width="20" height="20" style="margin-right:0.5em;flex-shrink:0;" />
        B.S. Computer Science
      </div>
      <p style="margin:0.25em 0 0; color:var(--text-link); font-size:0.95em; font-weight:600;">
        University of the Philippines Los Baños &nbsp;·&nbsp; July 2026
      </p>
      <div class="tags" style="margin-top: 0.5em;">
        <span class="tag">GWA: 1.4418 — Magna Cum Laude</span>
        <span class="tag">Honor Society of the Philippines Nominee (Top 10%)</span>
        <span class="tag">DOST-SEI Merit Scholar</span>
      </div>
    </div>
  </div>

  <!-- Experience -->
  <div class="section-gap">
    <h2>Experience</h2>
    <div class="cardset stagger" style="margin-top:1em;">

      <div class="card-anchor card card-content">
        <div class="exp-header">
          <div>
            <div class="card-title" style="font-size:1.05em;">Python Developer and Data Engineer</div>
            <div class="exp-org">
              <Icon icon="tabler:building" width="14" height="14" />
              Bronstein, Gewirtz &amp; Grossman, LLC &nbsp;·&nbsp; New York, United States · Remote
            </div>
          </div>
          <span class="exp-date">Jul 2026 – Present</span>
        </div>
        <ul class="exp-bullets">
          <li>Design and maintain the data infrastructure and backend systems supporting the firm's operations, building ETL pipelines and RESTful APIs to keep critical workflows running reliably.</li>
          <li>Apply data engineering, automation, and database management expertise to develop scalable Python solutions that improve efficiency and ensure data integrity across the firm's technology infrastructure.</li>
        </ul>
      </div>

      <div class="card-anchor card card-content">
        <div class="exp-header">
          <div>
            <div class="card-title" style="font-size:1.05em;">Software Developer Intern</div>
            <div class="exp-org">
              <Icon icon="tabler:building" width="14" height="14" />
              UPLB Interdisciplinary Studies Center for Integrated Natural Resources and Environment Management
            </div>
          </div>
          <span class="exp-date">June 2025 – July 2025</span>
        </div>
        <ul class="exp-bullets">
          <li>Collaborated directly with research scientists to automate their data workflows, engineering an ML data-parsing web app that cut manual reporting time by 90%.</li>
          <li>Managed internal databases and presented live analytics reports to executive leadership, successfully driving the official adoption of the tool for strategic planning.</li>
        </ul>
      </div>

      <div class="card-anchor card card-content">
        <div class="exp-header">
          <div>
            <div class="card-title" style="font-size:1.05em;">Resident Member</div>
            <div class="exp-org">
              <Icon icon="tabler:users" width="14" height="14" />
              Young Software Engineers' Society
            </div>
          </div>
          <span class="exp-date">Sep 2024 – Jul 2026</span>
        </div>
        <ul class="exp-bullets">
          <li>Spearheaded development of the YSYNC applicant management system to automate data tracking for 80+ candidates while co-organizing operational events for 50+ active members.</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- Skills -->
  <div class="section-gap">
    <h2>Skills</h2>
    <div class="cardset grid stagger" style="margin-top: 1em;">

      <div class="card-anchor card card-content">
        <div class="card-title">
          <Icon icon="tabler:device-desktop-code" width="22" height="22" style="margin-right:0.4em;flex-shrink:0;" />
          Languages
        </div>
        <div class="tags">
          {#each ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Bash', 'SQL'] as s}
            <span class="tag">{s}</span>
          {/each}
        </div>
      </div>

      <div class="card-anchor card card-content">
        <div class="card-title">
          <Icon icon="tabler:tool" width="22" height="22" style="margin-right:0.4em;flex-shrink:0;" />
          Frameworks & Tools
        </div>
        <div class="tags">
          {#each ['SvelteKit', 'Next.js', 'React', 'Django', 'Express.js', 'Node.js', 'Supabase', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx', 'Gunicorn', 'Git', 'TensorFlow', 'BERT', 'RESTful APIs'] as s}
            <span class="tag">{s}</span>
          {/each}
        </div>
      </div>

      <div class="card-anchor card card-content">
        <div class="card-title">
          <Icon icon="tabler:shield-lock" width="22" height="22" style="margin-right:0.4em;flex-shrink:0;" />
          Cybersecurity
        </div>
        <div class="tags">
          {#each ['Linux (Kali, Ubuntu)', 'Wazuh SIEM', 'IDS/EDR', 'Vulnerability Assessment', 'Penetration Testing', 'OWASP', 'Metasploit', 'Nmap', 'Networking (TCP/IP, DNS)'] as s}
            <span class="tag">{s}</span>
          {/each}
        </div>
      </div>

      <div class="card-anchor card card-content">
        <div class="card-title">
          <Icon icon="tabler:certificate" width="22" height="22" style="margin-right:0.4em;flex-shrink:0;" />
          Certifications & Labs
        </div>
        <div class="tags">
          {#each ['ISC2 CC (Expected 2026)', 'Google Cybersecurity Certificate', 'SEED Framework Labs', 'CTF Competitions'] as s}
            <span class="tag">{s}</span>
          {/each}
        </div>
      </div>

    </div>
  </div>
</div>

<style>
  .exp-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1em;
    flex-wrap: wrap;
  }

  .exp-org {
    display: flex;
    align-items: flex-start;
    gap: 0.35em;
    font-size: 0.85em;
    opacity: 0.65;
    margin-top: 0.2em;
    line-height: 1.4;
    max-width: 42rem;
  }

  .exp-date {
    font-size: 0.8em;
    opacity: 0.5;
    white-space: nowrap;
    letter-spacing: 0.03em;
    padding-top: 0.15em;
    flex-shrink: 0;
  }

  .exp-bullets {
    margin: 0;
    padding-left: 1.25em;
    font-size: 0.9em;
    line-height: 1.75;
    opacity: 0.85;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }
</style>
