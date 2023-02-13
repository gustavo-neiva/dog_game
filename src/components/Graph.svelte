<script>
  import { scaleLinear, scaleBand } from "d3-scale";
  import { max } from "d3";

  const points = [
    { year: 1990, birthrate: 16.7 },
    { year: 1995, birthrate: 14.6 },
    { year: 2000, birthrate: 14.4 },
    { year: 2005, birthrate: 14 },
    { year: 2010, birthrate: 13 },
    { year: 2015, birthrate: 12.4 },
  ];

  const yTicks = [1990, 1995, 2000, 2005, 2010, 2015];
  const xTicks = [0, 5, 10, 15, 20];
  const padding = { top: 20, right: 15, bottom: 20, left: 25 };

  let width = 500;
  let height = 500;

  function formatMobile(tick) {
    return "'" + tick.toString().slice(-2);
  }

  $: xScale = scaleLinear()
    .domain([0, max(points.map((d) => d.birthrate))])
    .range([0, width]);

  $: yScale = scaleBand()
    .domain(points.map((d) => d.year))
    .range([0, height])
    .paddingInner(0.15);

  $: innerWidth = width - (padding.left + padding.right);
  $: barWidth = innerWidth / yTicks.length;
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
  <svg>
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
      {#each points as point, i}
        <rect
          x={0}
          y={yScale(point.year)}
          width={xScale(point.birthrate)}
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
    height: 30rem;
  }

  .bars rect {
    fill: #a11;
    stroke: none;
    opacity: 0.65;
  }
</style>
