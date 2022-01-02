<script>
  export let href, text;
</script>

<a href={href}>{text}</a>

<style>
  a:link, a:visited {
    border: .2rem solid #876445;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: .1rem;
    transition: all .2s;
    position: relative;
    font-size: 1.6rem;
  }

  a:hover {
    transform: translateY(-2.7px);
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
</style>