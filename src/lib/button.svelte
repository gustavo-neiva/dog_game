<style lang="postcss">
  button, button:link, button:visited {
    color: white;
    border: 0.2rem solid rgb(24, 101, 242);
    background: rgb(24, 101, 242);
    text-decoration: none;
    font-weight: bold;
    padding: 1rem 2rem;
    display: inline-block;
    border-radius: 1rem;
    transition: all .2s;
    position: relative;
    font-size: 1.6rem;
    white-space: nowrap;
    min-width: 15rem;
    text-align: center;
    cursor: pointer;
  }
  button:active {
    transform: translateY(-1px);
  }
  button::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }
</style>

<script>
  export let texto
</script>

<button
  on:click
>
  {texto}
</button>
