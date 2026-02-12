<script>
  import { fly } from 'svelte/transition';
  import { theme } from './stores/theme.js';
  import ThemeToggle from './components/ThemeToggle.svelte';
  import ButtonsView from './views/ButtonsView.svelte';
  import RadiosView from './views/RadiosView.svelte';
  import InputsView from './views/InputsView.svelte';

  let currentView = 'buttons';

  const views = [
    { id: 'buttons', label: '🔘 Buttons', component: ButtonsView },
    { id: 'radios', label: '⚪ Radios', component: RadiosView },
    { id: 'inputs', label: '📝 Inputs', component: InputsView }
  ];

  function setView(viewId) {
    currentView = viewId;
  }

  $: activeComponent = views.find(v => v.id === currentView)?.component;
</script>

<div class="app">
  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <span class="brand-icon">🎨</span>
        <span class="brand-text">Emoji UI</span>
      </div>
      
      <div class="navbar-tabs">
        {#each views as view}
          <button
            class="nav-tab"
            class:active={currentView === view.id}
            on:click={() => setView(view.id)}
          >
            {view.label}
          </button>
        {/each}
      </div>
      
      <ThemeToggle />
    </div>
  </nav>

  <!-- Main Content -->
  <main class="main-content">
    <div class="content-container">
      {#key currentView}
        <div
          in:fly={{ y: 20, duration: 300, delay: 150 }}
          out:fly={{ y: -20, duration: 150 }}
        >
          <svelte:component this={activeComponent} />
        </div>
      {/key}
    </div>
  </main>
</div>

<style>
  .app {
    min-height: 100vh;
    background: var(--bg-primary);
  }

  /* Navbar Styles */
  .navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-bottom: 1px solid var(--glass-border);
    padding: var(--space-4) 0;
  }

  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-weight: 700;
    font-size: var(--text-xl);
  }

  .brand-icon {
    font-size: var(--text-2xl);
    line-height: 1;
  }

  .brand-text {
    color: var(--text-primary);
  }

  .navbar-tabs {
    display: flex;
    gap: var(--space-2);
    flex: 1;
    justify-content: center;
  }

  .nav-tab {
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-secondary);
    font-size: var(--text-base);
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
    font-family: inherit;
  }

  .nav-tab:hover {
    background: var(--glass-bg-hover);
    color: var(--text-primary);
  }

  .nav-tab.active {
    background: var(--glass-bg);
    border-color: var(--glass-border-hover);
    color: var(--text-primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  /* Main Content */
  .main-content {
    padding: var(--space-8) 0;
  }

  .content-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .navbar-container {
      flex-wrap: wrap;
    }

    .navbar-brand {
      order: 1;
    }

    .navbar-tabs {
      order: 3;
      width: 100%;
      justify-content: flex-start;
      overflow-x: auto;
    }

    .nav-tab {
      white-space: nowrap;
      padding: var(--space-2) var(--space-3);
      font-size: var(--text-sm);
    }
  }
</style>

