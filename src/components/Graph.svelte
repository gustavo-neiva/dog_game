<script>
  import { fade } from "svelte/transition";
  import { scaleLinear, scaleBand } from "d3-scale";
  import { max } from "d3";
  import { graphStreaks, numberOfQuestions } from "src/lib/repository";
  import { horizontalSlide } from "../lib/helpers";

  const points = graphStreaks();
  const yTicks = [...Array(numberOfQuestions + 1).keys()];
  const xTicks = points.map((d) => d.value);
  const padding = { top: 5, right: 5, bottom: 5, left: 15 };

  let width = 300;
  $: innerHeight = 200;

  const maxValue = max(points.map((d) => d.value)) || 1;
  const innerWidth = width - (padding.left - padding.right);
  $: height = innerHeight / 2.5;
  $: fontSize = height / 20;
  $: xScale = scaleLinear()
    .domain([-maxValue * 0.08, maxValue])
    .range([0, innerWidth - padding.right - padding.left]);

  $: yScale = scaleBand()
    .domain(points.map((d) => d.number))
    .range([padding.top, height - padding.bottom * 2])
    .paddingInner(0.125);
</script>

<svelte:window bind:innerHeight />

<div class="chart">
  <svg {height} {width}>
    <g class="bars">
      {#each points as point}
        <rect
          x={padding.left + fontSize / 2}
          y={yScale(point.number)}
          fill={point.value === 0 ? "black" : "#e04d01"}
          width={xScale(point.value)}
          height={yScale.bandwidth()}
          in:horizontalSlide={{ direction: "inline", duration: 1000 }}
        />
      {/each}
    </g>
    <g class="axis y-axis">
      {#each yTicks as tick, i}
        <g
          class="tick tick-{tick}"
          text-anchor="start"
          transform="translate(0, {yScale(tick) + fontSize})"
          in:fade={{ duration: 1500 }}
        >
          <text x2="100%" font-size={fontSize}>{tick}</text>
        </g>
      {/each}
    </g>

    <g class="axis x-axis">
      {#each xTicks as tick, i}
        <g class="tick tick-{tick}">
          <text
            x2="100%"
            font-size={fontSize * 0.9}
            font-weight={200}
            text-anchor="end"
            x={innerHeight > 720 ? 4 : 0}
            transform="translate({xScale(tick) + padding.left}, {yScale(i) +
              fontSize * 0.9})"
            in:fade={{ duration: 1500 }}
          >
            {xTicks[i]}
          </text>
        </g>
      {/each}
    </g>
  </svg>
</div>

<style>
  .chart {
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
  }

  svg {
    position: relative;
    width: 100%;
  }

  .bars rect {
    stroke: none;
    opacity: 0.65;
  }

  text {
    stroke: white;
    fill: white;
  }
</style>
