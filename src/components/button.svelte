<script>
  export let text;
</script>

<button on:click>
  {text}
</button>

<style lang="postcss">
  button,
  button:link,
  button:visited {
    color: white;
    border: 0.2rem solid rgb(24, 101, 242);
    background: rgb(24, 101, 242);
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    transition: all 0.2s;
    position: relative;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      min-width: 8rem;
      font-size: 1.2rem;
      padding: 0.6rem 1.4rem;
      border-radius: 0.6rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      min-width: 12rem;
      font-size: 1.4rem;
      padding: 0.8rem 0.8rem;
      border-radius: 0.8rem;
    }

    @media screen and (min-width: 1024px) {
      min-width: 15rem;
      font-size: 1.6rem;
      padding: 1rem 2rem;
      border-radius: 1rem;
    }
  }

  button:active {
    transform: translateY(-1px);
  }

  button::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
</style>
