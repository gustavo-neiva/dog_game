<header>
  <div class="menu-left">menu left</div>
  <div class="title">
    <h1>Canine Cognition</h1>
  </div>
  <div class="menu-right">menu right</div>
</header>

<style lang="postcss">
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 6rem;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }

  .title {
    flex-grow: 2;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.01em;
    text-align: center;
    left: 0;
    right: 0;
    pointer-events: none;
    position: relative;
  }

  .menu-left {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: flex-start;
  }

  .menu-right {
    display: flex;
    justify-content: flex-end;
  }
</style>
