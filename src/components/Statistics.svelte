<script>
  import Graph from "@components/Graph.svelte";
  import { getStats } from "src/lib/repository";
  const { nGames, lastStreak, maxStreak, average } = getStats();
  const formatedAverage = (average * 100).toLocaleString("en", {
    maximumFractionDigits: 2,
  });
</script>

<div class="statistics-container">
  <h4>Statistics</h4>
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
  <h4>Score distribution</h4>
  <Graph />
</div>

<style lang="postcss">
  h4 {
    letter-spacing: 0.05em;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 2.8rem;
      margin-top: 0.6rem;
      margin-bottom: 0.1rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.4rem;
      line-height: 3rem;
      margin-top: 0.8rem;
      margin-bottom: 0.3rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1.6rem;
      line-height: 3.2rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
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
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.17rem;
    font-variant-numeric: proportional-nums;

    @media screen and (max-width: 768px) {
      font-size: 2.8rem;
      line-height: 3rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 3rem;
      line-height: 3.2rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 3.4rem;
      line-height: 3.6rem;
    }
  }

  .statistics__label {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.1rem;

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1rem;
      line-height: 1.4rem;
    }
  }
</style>
