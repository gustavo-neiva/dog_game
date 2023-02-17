<script>
</script>

<div class="info">
  <div class="content">
    <p>
      The quiz game consists of 12 questions with a picture of a dog and four
      options of breed names.
    </p>
    <p>Click on the breed name that you think it's the correct one.</p>
    <p>
      All pictures and dog's breed are fetched from <a
        href="https://dog.ceo/dog-api/"
        target="_blank">DogAPI</a
      >
    </p>
  </div>
  <div class="footer">
    <p>
      Made with &#10084;&#65039; by Gustavo Neiva using <a
        href="https://svelte.dev/"
        target="_blank">Svelte</a
      >
      and <a href="https://astro.build/" target="_blank">Astro</a>
    </p>
  </div>
</div>

<style lang="postcss">
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #2a2550;
    max-width: 72rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    min-height: 50vh;
    width: 85%;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      padding: 1rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 2rem;
      padding: 2rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 3rem;
      padding: 3rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
      margin: 1.5rem 0;
      font-size: 1.6rem;
    }
  }
</style>
