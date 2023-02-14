<script>
  import { scaleLinear, scaleBand } from "d3-scale";
  import { max } from "d3";
  import { graphStreaks, numberOfQuestions } from "src/lib/repository";

  const points = graphStreaks();
  const yTicks = [...Array(numberOfQuestions + 1).keys()];
  const xTicks = points.map((d) => d.value);
  console.log(yTicks);
  const padding = { top: 20, right: 5, bottom: 20, left: 5 };

  let width = 500;
  let height = 600;

  const maxValue = max(points.map((d) => d.value));
  $: xScale = scaleLinear()
    .domain([-maxValue * 0.08, maxValue])
    .range([0, width]);

  $: yScale = scaleBand()
    .domain(points.map((d) => d.number))
    .range([0, height - padding.top - padding.bottom])
    .paddingInner(0.15);

  $: innerWidth = width - (padding.left + padding.right);
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
  <svg height={350} {innerWidth}>
    <g class="bars">
      {#each points as point}
        <rect
          x={25}
          y={yScale(point.number)}
          width={xScale(point.value)}
          height={yScale.bandwidth()}
        />
      {/each}
    </g>
    <g class="axis y-axis">
      {#each yTicks as tick, i}
        <g
          class="tick tick-{tick}"
          transform="translate(0, {yScale(tick) + 20})"
        >
          <text x2="100%">{tick}</text>
        </g>
      {/each}
    </g>

    <g class="axis x-axis">
      {#each xTicks as tick, i}
        <g
          class="tick tick-{tick}"
          transform="translate({xScale(tick) - 10}, {yScale(i) + 20})"
        >
          <text x2="100%">{xTicks[i]}</text>
        </g>
      {/each}
    </g>
  </svg>
</div>

<style>
  .chart {
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
  }

  svg {
    position: relative;
    width: 100%;
  }

  .bars rect {
    fill: #e04d01;
    stroke: none;
    opacity: 0.65;
  }

  text {
    font-size: 1.6rem;
    stroke: white;
    fill: white;
  }
</style>
