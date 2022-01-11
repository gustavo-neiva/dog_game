<script>
  export let href, text, disabled;
</script>

<a
  href={href}
  on:click
  class:disabled="{disabled}"
>
  {text}
</a>

<style>
  a, a:link, a:visited {
    border: 0.3rem solid #876445;
    background: darkgray;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: bold;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 3rem;
    transition: all .2s;
    position: relative;
    font-size: 1.6rem;
  }

  a:hover {
    transform: translateY(-2.7px) scale(1.05);
  }

  a:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  a:active {
    transform: translateY(-1px);
  }

  a::after {
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

  .disabled {
    pointer-events: none;
    opacity: 0.5;
    transform: scale(0.9);
  }
</style>