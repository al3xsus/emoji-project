<script>
  import EmojiIcon from "../components/EmojiIcon.svelte";
  import GlassCard from "../components/GlassCard.svelte";
  import ViewContainer from "../components/ViewContainer.svelte";

  export let title = 'Dashboard';
  export let period = 'Mar 2026';
  export let scope = 'Global';
  export let mode = 'Live View';
  export let alertCount = 5;

  const topMetrics = [
    { emoji: '💰', label: 'Revenue', value: '$482.4K', delta: '+12.8%', note: 'vs last month', progress: 68, tone: 'primary' },
    { emoji: '📈', label: 'Growth', value: '18.4%', delta: '+3.2 pts', note: 'MoM expansion', progress: 58, tone: 'primary' },
    { emoji: '👥', label: 'Active Users', value: '28,941', delta: '+1,284', note: '7-day avg', progress: 74, tone: 'secondary' },
    { emoji: '🧲', label: 'Qualified Leads', value: '1,276', delta: '+9.1%', note: 'pipeline-ready', progress: 61, tone: 'accent' },
    { emoji: '🔥', label: 'Burn Rate', value: '$91.6K', delta: '-4.5%', note: 'operating spend', progress: 47, tone: 'danger' },
    { emoji: '🎯', label: 'Goal Completion', value: '74%', delta: '+6%', note: 'quarter target', progress: 74, tone: 'accent' }
  ];

  const funnel = [
    { emoji: '👀', stage: 'Visitors', value: '148,220', pct: 100 },
    { emoji: '📝', stage: 'Signups', value: '12,480', pct: 84 },
    { emoji: '🤝', stage: 'Meetings', value: '2,116', pct: 52 },
    { emoji: '💳', stage: 'Trials', value: '864', pct: 31 },
    { emoji: '✅', stage: 'Paid', value: '312', pct: 21 }
  ];

  const channels = [
    { emoji: '🔎', channel: 'Organic Search', users: '9,842', conv: '4.9%', revenue: '$82.4K' },
    { emoji: '📣', channel: 'Paid Campaigns', users: '6,201', conv: '3.7%', revenue: '$65.8K' },
    { emoji: '💌', channel: 'Email', users: '4,488', conv: '6.1%', revenue: '$71.3K' },
    { emoji: '🤝', channel: 'Partners', users: '2,104', conv: '8.9%', revenue: '$93.2K' },
    { emoji: '🎥', channel: 'Social / Video', users: '3,942', conv: '2.8%', revenue: '$28.7K' }
  ];

  const projects = [
    { emoji: '🚀', name: 'Launch Q2 Self-Serve', owner: 'Growth', status: 'On track', progress: 78 },
    { emoji: '🧠', name: 'AI Recommendation Engine', owner: 'Product', status: 'At risk', progress: 54 },
    { emoji: '🔐', name: 'Security Compliance', owner: 'Ops', status: 'On track', progress: 88 },
    { emoji: '📦', name: 'Enterprise Packaging', owner: 'Revenue', status: 'Blocked', progress: 41 }
  ];

  const alerts = [
    { emoji: '🚨', title: 'Churn spike in SMB segment', meta: 'Today · Retention' },
    { emoji: '⚠️', title: 'Paid CAC rose 11% week-over-week', meta: '2h ago · Marketing' },
    { emoji: '✅', title: 'Security audit passed stage 2', meta: 'Today · Compliance' },
    { emoji: '💬', title: '14 enterprise accounts requested demos', meta: 'Today · Sales' },
    { emoji: '📦', title: 'New pricing page rolled out to 50%', meta: 'Yesterday · Product' }
  ];

  const team = [
    { emoji: '🟢', name: 'Growth', note: 'Leads above plan', value: '+14%' },
    { emoji: '🟡', name: 'Product', note: '2 initiatives at risk', value: '2 flags' },
    { emoji: '🟢', name: 'Sales', note: 'Pipeline healthy', value: '$1.2M' },
    { emoji: '🔴', name: 'Support', note: 'Response SLA slipping', value: '83%' },
    { emoji: '🟢', name: 'Finance', note: 'Burn improving', value: '-4.5%' }
  ];

  const trendBars = [42, 38, 45, 51, 57, 54, 62, 66, 70, 74, 71, 79];
  const trendSummary = [
    ['💰', 'Revenue Run Rate', '$5.7M'],
    ['⚡', 'Activation', '61.2%'],
    ['📦', 'ARPA', '$184']
  ];

  function metricClass(tone) {
    if (tone === 'danger') return 'btn-danger';
    if (tone === 'accent') return 'btn-accent';
    if (tone === 'secondary') return 'btn-secondary';
    return 'btn-primary';
  }

  function funnelWidth(pct) {
    return `width: ${pct}%;`;
  }

  function progressWidth(progress) {
    return `width: ${progress}%;`;
  }

  function trendHeight(value) {
    return `height: ${value * 2.1}px;`;
  }
</script>

<ViewContainer {title}>
  <GlassCard>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4 header-main">
        <div>
          <div class="eyebrow text-tertiary">Emoji Analytics Dashboard</div>
          <p class="dashboard-copy text-secondary">
            Emoji-led, data-dense operational interface for growth, revenue, product, and team execution.
          </p>
        </div>

        <div class="header-pills">
          <div class="meta-pill glass-subtle float-soft"><EmojiIcon icon="📅" label="Period" class="sym-sm" /><span>{period}</span></div>
          <div class="meta-pill glass-subtle float-soft delay-1"><EmojiIcon icon="🌍" label="Scope" class="sym-sm" /><span>{scope}</span></div>
          <div class="meta-pill glass-subtle float-soft delay-2"><EmojiIcon icon="⚙️" label="Mode" class="sym-sm spin-hover" /><span>{mode}</span></div>
          <div class="meta-pill glass-subtle float-soft delay-3"><EmojiIcon icon="🔔" label="Alerts" class="sym-sm bell-hover" /><span>{alertCount} Alerts</span></div>
        </div>
      </div>
    </div>
  </GlassCard>

  <section class="metric-grid">
    {#each topMetrics as item, index}
      <div class="fade-up" style={`animation-delay:${index * 70}ms`}>
        <GlassCard>
          <div class="metric-card-inner">
            <div class="flex justify-between items-start gap-4">
              <div class="flex items-center gap-3">
                <div class="metric-icon glass-subtle pulse-soft">
                  <EmojiIcon icon={item.emoji} label={item.label} class="sym-md" />
                </div>
                <div>
                  <div class="text-sm text-tertiary">{item.label}</div>
                  <div class="metric-value">{item.value}</div>
                </div>
              </div>

              <div class={`delta-pill ${metricClass(item.tone)}`}>{item.delta}</div>
            </div>

            <div class="progress-track mt-4">
              <div class="progress-fill animated-fill" style={progressWidth(item.progress)}></div>
            </div>

            <div class="text-sm text-tertiary mt-3">{item.note}</div>
          </div>
        </GlassCard>
      </div>
    {/each}
  </section>

  <section class="main-grid-two">
    <div class="fade-up" style="animation-delay:120ms">
      <GlassCard>
        <div class="flex justify-between items-center gap-3 section-head">
          <div>
            <div class="eyebrow text-tertiary">📈 Trend</div>
            <h2 class="section-title">Revenue & Activation Trend</h2>
          </div>
          <div class="meta-chip glass-subtle text-sm text-secondary">Last 12 weeks</div>
        </div>

        <div class="trend-plot glass-subtle mt-4">
          <div class="trend-bars">
            {#each trendBars as bar, index}
              <div class="trend-col">
                <div class="trend-bar grow-bar" style={`${trendHeight(bar)}; animation-delay:${index * 60}ms`}></div>
                <div class="trend-label text-tertiary">W{index + 1}</div>
              </div>
            {/each}
          </div>
        </div>

        <div class="summary-grid mt-4">
          {#each trendSummary as item, index}
            <div class="glass-subtle summary-card fade-up" style={`animation-delay:${180 + index * 80}ms`}>
              <EmojiIcon icon={item[0]} label={item[1]} class="sym-sm pulse-soft" />
              <div class="text-sm text-tertiary mt-2">{item[1]}</div>
              <div class="summary-value">{item[2]}</div>
            </div>
          {/each}
        </div>
      </GlassCard>
    </div>

    <div class="fade-up" style="animation-delay:180ms">
      <GlassCard>
        <div class="eyebrow text-tertiary">🧭 Funnel</div>
        <h2 class="section-title">Acquisition Flow</h2>

        <div class="stack-list mt-4">
          {#each funnel as item, index}
            <div class="glass-subtle stack-card fade-up" style={`animation-delay:${220 + index * 70}ms`}>
              <div class="flex justify-between items-center gap-3">
                <div class="flex items-center gap-3">
                  <EmojiIcon icon={item.emoji} label={item.stage} class="sym-md pulse-soft" />
                  <div>
                    <div class="text-sm text-tertiary">Stage {index + 1}</div>
                    <div class="item-title">{item.stage}</div>
                  </div>
                </div>

                <div class="text-right">
                  <div class="item-title">{item.value}</div>
                  <div class="text-sm text-tertiary">{item.pct}%</div>
                </div>
              </div>

              <div class="progress-track mt-3">
                <div class="progress-fill animated-fill" style={funnelWidth(item.pct)}></div>
              </div>
            </div>
          {/each}
        </div>
      </GlassCard>
    </div>
  </section>

  <section class="main-grid-three no-regions">
    <div class="fade-up" style="animation-delay:240ms">
      <GlassCard>
        <div class="flex justify-between items-center gap-3 section-head">
          <div>
            <div class="eyebrow text-tertiary">📣 Channels</div>
            <h2 class="section-title">Acquisition Performance</h2>
          </div>
          <div class="text-sm text-tertiary">Top 5</div>
        </div>

        <div class="table-wrap mt-4">
          <table>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Users</th>
                <th>Conv.</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {#each channels as row, index}
                <tr class="row-fade" style={`animation-delay:${260 + index * 70}ms`}>
                  <td>
                    <div class="flex items-center gap-3">
                      <EmojiIcon icon={row.emoji} label={row.channel} class="sym-sm" />
                      <span>{row.channel}</span>
                    </div>
                  </td>
                  <td>{row.users}</td>
                  <td>{row.conv}</td>
                  <td class="cell-strong">{row.revenue}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>

    <div class="fade-up" style="animation-delay:300ms">
      <GlassCard>
        <div class="eyebrow text-tertiary">🚨 Live Alerts</div>
        <h2 class="section-title">What needs attention</h2>

        <div class="stack-list mt-4">
          {#each alerts as item, index}
            <div class="glass-subtle stack-card fade-up" style={`animation-delay:${320 + index * 70}ms`}>
              <div class="flex items-start gap-3">
                <EmojiIcon icon={item.emoji} label="Alert" class="sym-md pulse-soft" />
                <div>
                  <div class="item-title item-tight">{item.title}</div>
                  <div class="text-sm text-tertiary mt-1">{item.meta}</div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </GlassCard>
    </div>
  </section>

  <section class="main-grid-two lower-grid">
    <div class="fade-up" style="animation-delay:360ms">
      <GlassCard>
        <div class="eyebrow text-tertiary">🧩 Execution</div>
        <h2 class="section-title">Strategic Initiatives</h2>

        <div class="stack-list mt-4">
          {#each projects as item, index}
            <div class="glass-subtle stack-card fade-up" style={`animation-delay:${380 + index * 70}ms`}>
              <div class="initiative-top">
                <div class="flex items-center gap-3">
                  <EmojiIcon icon={item.emoji} label={item.name} class="sym-md pulse-soft" />
                  <div>
                    <div class="item-title">{item.name}</div>
                    <div class="text-sm text-tertiary">Owner: {item.owner}</div>
                  </div>
                </div>

                <div class="initiative-meta">
                  <span class="meta-chip glass-subtle text-sm text-secondary">{item.status}</span>
                  <span class="text-sm text-secondary">{item.progress}%</span>
                </div>
              </div>

              <div class="progress-track mt-3">
                <div class="progress-fill animated-fill" style={progressWidth(item.progress)}></div>
              </div>
            </div>
          {/each}
        </div>
      </GlassCard>
    </div>

    <div class="side-stack">
      <div class="fade-up" style="animation-delay:420ms">
        <GlassCard>
          <div class="eyebrow text-tertiary">🏁 Team Pulse</div>
          <h2 class="section-title">Department Health</h2>

          <div class="stack-list mt-4">
            {#each team as item, index}
              <div class="glass-subtle pulse-row fade-up" style={`animation-delay:${440 + index * 60}ms`}>
                <div class="flex items-center gap-3">
                  <EmojiIcon icon={item.emoji} label={item.name} class="sym-sm pulse-soft" />
                  <div>
                    <div class="item-title">{item.name}</div>
                    <div class="text-sm text-tertiary">{item.note}</div>
                  </div>
                </div>
                <div class="item-title">{item.value}</div>
              </div>
            {/each}
          </div>
        </GlassCard>
      </div>

      <div class="fade-up" style="animation-delay:480ms">
        <GlassCard>
          <div class="eyebrow text-tertiary">📝 Notes</div>
          <h2 class="section-title">Executive Summary</h2>

          <div class="notes-list mt-4 text-secondary">
            <p><EmojiIcon icon="✅" label="Good" class="sym-sm mr-2 pulse-soft" />Revenue and qualified pipeline continue to grow above plan, supported by partners and email.</p>
            <p><EmojiIcon icon="⚠️" label="Warning" class="sym-sm mr-2 pulse-soft" />Paid CAC is rising; spend efficiency should be reviewed before scaling campaigns.</p>
            <p><EmojiIcon icon="🧠" label="Product" class="sym-sm mr-2 pulse-soft" />Product execution remains solid overall, but recommendation engine and packaging need leadership attention.</p>
            <p><EmojiIcon icon="📦" label="Packaging" class="sym-sm mr-2 pulse-soft" />Enterprise packaging remains the most constrained stream and should be unblocked first.</p>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</ViewContainer>

<style>
  .dashboard-copy {
    max-width: 58rem;
    margin-top: var(--space-2);
    font-size: var(--text-base);
  }

  .header-main {
    justify-content: space-between;
  }

  .header-pills {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-3);
  }

  .meta-pill,
  .meta-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
  }

  .glass-subtle {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    box-shadow: var(--shadow-glass);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast), background var(--transition-fast);
  }

  .glass-subtle:hover {
    border-color: var(--glass-border-hover);
    box-shadow: var(--shadow-glass-hover);
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: var(--space-4);
    align-items: stretch;
  }

  .metric-grid > div {
    min-width: 0;
    height: 100%;
  }

  .metric-grid :global(.glass-card) {
    height: 100%;
  }

  .metric-card-inner,
  .section-head {
    min-width: 0;
  }

  .metric-card-inner {
    min-height: 100%;
  }

  .metric-icon {
    width: 3rem;
    height: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .metric-value,
  .summary-value {
    margin-top: var(--space-1);
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: 1.1;
  }

  .delta-pill {
    align-self: flex-start;
    border-radius: var(--radius-md);
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    line-height: 1;
  }

  .progress-track {
    width: 100%;
    height: 0.55rem;
    border-radius: var(--radius-full);
    background: var(--bg-secondary);
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--btn-primary-bg), var(--btn-accent-bg));
    transform-origin: left center;
  }

  .main-grid-two,
  .main-grid-three {
    display: grid;
    gap: var(--space-6);
    grid-template-columns: 1fr;
  }

  .eyebrow {
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.18em;
  }

  .section-title {
    margin-top: var(--space-1);
    font-size: var(--text-xl);
    line-height: 1.2;
  }

  .trend-plot {
    overflow: hidden;
  }

  .trend-bars {
    height: 18rem;
    display: flex;
    align-items: flex-end;
    gap: var(--space-3);
  }

  .trend-col {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    justify-content: flex-end;
  }

  .trend-bar {
    width: 100%;
    min-height: 1rem;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    background: linear-gradient(180deg, var(--btn-primary-bg), var(--btn-accent-bg));
    transform-origin: bottom center;
  }

  .trend-label {
    font-size: var(--text-xs);
  }

  .summary-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .summary-card {
    display: block;
  }

  .stack-list {
    display: grid;
    gap: var(--space-3);
  }

  .stack-card {
    padding: var(--space-4);
  }

  .item-title {
    font-size: var(--text-base);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
  }

  .item-tight {
    line-height: 1.25;
  }

  .table-wrap {
    overflow: auto;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    background: var(--glass-bg);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 560px;
  }

  th,
  td {
    text-align: left;
    padding: var(--space-3) var(--space-4);
    border-bottom: 1px solid var(--glass-border);
    font-size: var(--text-sm);
  }

  th {
    color: var(--text-tertiary);
    font-weight: 500;
    background: var(--glass-bg-hover);
  }

  td {
    color: var(--text-secondary);
  }

  .cell-strong {
    color: var(--text-primary);
    font-weight: 700;
  }

  .initiative-top,
  .pulse-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .initiative-meta {
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .side-stack {
    display: grid;
    gap: var(--space-6);
  }

  .notes-list {
    display: grid;
    gap: var(--space-4);
    font-size: var(--text-sm);
    line-height: 1.7;
  }

  .notes-list p {
    display: flex;
    align-items: flex-start;
  }

  .fade-up {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeUp 620ms ease forwards;
  }

  .row-fade {
    opacity: 0;
    animation: rowFade 520ms ease forwards;
  }

  .animated-fill {
    animation: fillGrow 1000ms ease both;
  }

  .grow-bar {
    animation: barGrow 700ms ease both;
  }

  .float-soft {
    animation: floatSoft 4.5s ease-in-out infinite;
  }

  .pulse-soft {
    animation: pulseSoft 3.4s ease-in-out infinite;
  }

  .spin-hover:hover {
    animation: spin 1s linear infinite;
  }

  .bell-hover:hover {
    animation: bellSwing 700ms ease-in-out infinite;
  }

  .delay-1 { animation-delay: 160ms; }
  .delay-2 { animation-delay: 320ms; }
  .delay-3 { animation-delay: 480ms; }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes rowFade {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fillGrow {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  @keyframes barGrow {
    from {
      transform: scaleY(0.15);
      opacity: 0.45;
    }
    to {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  @keyframes floatSoft {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  @keyframes pulseSoft {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes bellSwing {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(12deg); }
    75% { transform: rotate(-10deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    .fade-up,
    .row-fade,
    .animated-fill,
    .grow-bar,
    .float-soft,
    .pulse-soft,
    .spin-hover:hover,
    .bell-hover:hover {
      animation: none !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }

  @media (min-width: 640px) {
    .summary-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .header-pills {
      /* grid-template-columns: repeat(4, minmax(0, 1fr)); */
    }
  }

  @media (min-width: 768px) {
    .metric-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .header-main {
      flex-direction: row;
      align-items: center;
    }

    .main-grid-two {
      grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.85fr);
    }

    .main-grid-three.no-regions {
      grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.7fr);
    }
  }

  @media (min-width: 1024px) {
    .metric-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {

    .lower-grid {
      grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
    }
  }

  @media (max-width: 767px) {
    .initiative-top,
    .pulse-row {
      flex-direction: column;
      align-items: flex-start;
    }

    .initiative-meta {
      justify-content: flex-start;
    }
  }
</style>
