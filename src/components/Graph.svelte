<script>
  import { scaleLinear, scaleBand } from "d3-scale";
  import { max } from "d3";
  import { graphStreaks, numberOfQuestions } from "src/lib/repository";

  const points = graphStreaks();
  const yTicks = [...Array(numberOfQuestions + 1).keys()];
  const padding = { top: 20, right: 5, bottom: 20, left: 5 };

  let width = 500;
  let height = 600;
  console.log(points);
  function formatMobile(tick) {
    return "'" + tick.toString().slice(-2);
  }
  const maxValue = max(points.map((d) => d.value));
  $: xScale = scaleLinear()
    .domain([-maxValue * 0.1, maxValue])
    .range([0, width]);

  $: yScale = scaleBand()
    .domain(points.map((d) => d.number))
    .range([0, height - padding.top - padding.bottom])
    .paddingInner(0.15);

  $: innerWidth = width - (padding.left + padding.right);
  $: barWidth = innerWidth / yTicks.length;
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
  <svg height={350} {innerWidth}>
    <!-- y axis -->
    <!-- <g class="axis y-axis">
      {#each yTicks as tick}
        <g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
          <line x2="100%" />
        </g>
      {/each}
    </g> -->

    <!-- x axis -->
    <!-- <g class="axis x-axis">
      {#each points as point, i}
        <g class="tick" transform="translate({xScale(i)},{height})" />
      {/each}
    </g> -->

    <g class="bars">
      {#each points as point}
        <rect
          x={0}
          y={yScale(point.number)}
          width={xScale(point.value)}
          height={yScale.bandwidth()}
        />
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
    fill: #a11;
    stroke: none;
    opacity: 0.65;
  }
</style>
