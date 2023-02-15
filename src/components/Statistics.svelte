<script>
  import Graph from "./Graph.svelte";
  import { getStats } from "src/lib/repository";
  const { nGames, lastStreak, maxStreak, average } = getStats();
  const formatedAverage = (average * 100).toLocaleString("en", {
    maximumFractionDigits: 2,
  });
</script>

<div class="statistics-container">
  <h2>Statistics</h2>
  <div class="statistics">
    <div class="statistics__group">
      <p class="statistics__value">{nGames}</p>
      <p class="statistics__label">Played</p>
    </div>
    <div class="statistics__group">
      <p class="statistics__value">
        {formatedAverage}
      </p>
      <p class="statistics__label">Correct %</p>
    </div>
    <div class="statistics__group">
      <p class="statistics__value">{lastStreak}</p>
      <p class="statistics__label">Last Score</p>
    </div>
    <div class="statistics__group">
      <p class="statistics__value">{maxStreak}</p>
      <p class="statistics__label">Max Score</p>
    </div>
  </div>
  <h2>Answers distribution</h2>
  <Graph />
</div>

<style lang="postcss">
  h2 {
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .statistics-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
  }

  .statistics {
    display: flex;
  }

  .statistics__group {
    flex: 1;
    margin-left: 0.8rem;
  }

  .statistics__value {
    font-size: 3.4rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.17rem;
    font-variant-numeric: proportional-nums;
    line-height: 3.6rem;
  }

  .statistics__label {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.4rem;
    letter-spacing: 0.1rem;
  }
</style>
