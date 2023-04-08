<script>
</script>

<div class="info">
  <div class="content">
    <p>
      This quiz game consists of 12 questions with a picture of a dog and four
      options of breed names.
    </p>
    <p>Click on the breed that you think is the correct one.</p>
    <p>
      All pictures and dog's breeds are fetched from <a
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
      with <a href="https://astro.build/" target="_blank">Astro</a>
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
    padding: 3rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
      @media screen and (max-width: 768px) {
        font-size: 2rem;
        margin: 1.5rem 0;
      }

      @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 2.4rem;
        margin: 2rem 0;
      }

      @media screen and (min-width: 1024px) {
        font-size: 3rem;
        margin: 3rem 0;
      }
    }
  }
</style>
