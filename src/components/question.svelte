<script>
  export let question;
</script>

<h2>Which picture is {question.question.breed}?</h2>
{#each question.images as image}
  <img src={image.url} alt="Dog to choose" img-index={image.index} lazy>
{/each}

