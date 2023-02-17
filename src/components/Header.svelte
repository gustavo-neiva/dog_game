<script>
  import { showModal } from "../store";
</script>

<header>
  <div class="menu-left">
    <button id="help"> ? </button>
  </div>
  <div class="title">
    <h1>Canine Cognition</h1>
  </div>
  <div class="menu-right">
    <button on:click={() => showModal.set(true)}>
      <img
        src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3IDYzLjVDMjcgNTkuMzU3OSAzMC4zNTc5IDU2IDM0LjUgNTZWNTZDMzguNjQyMSA1NiA0MiA1OS4zNTc5IDQyIDYzLjVWMTAySDI3VjYzLjVaIiBmaWxsPSIjQjdBRUI0Ii8+CjxwYXRoIGQ9Ik00NyAzMy41QzQ3IDI5LjM1NzkgNTAuMzU3OSAyNiA1NC41IDI2VjI2QzU4LjY0MjEgMjYgNjIgMjkuMzU3OSA2MiAzMy41VjEwMkg0N1YzMy41WiIgZmlsbD0iI0I3QUVCNCIvPgo8cGF0aCBkPSJNNjcgNTAuNUM2NyA0Ni4zNTc5IDcwLjM1NzkgNDMgNzQuNSA0M1Y0M0M3OC42NDIxIDQzIDgyIDQ2LjM1NzkgODIgNTAuNVYxMDJINjdWNTAuNVoiIGZpbGw9IiNCN0FFQjQiLz4KPHBhdGggZD0iTTg3IDczLjVDODcgNjkuMzU3OSA5MC4zNTc5IDY2IDk0LjUgNjZWNjZDOTguNjQyMSA2NiAxMDIgNjkuMzU3OSAxMDIgNzMuNVYxMDJIODdWNzMuNVoiIGZpbGw9IiNCN0FFQjQiLz4KPC9zdmc+Cg=="
        alt="Stats icon"
      />
    </button>
  </div>
</header>

<style lang="postcss">
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 6rem;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }

  .title {
    flex-grow: 2;
    font-weight: 700;
    letter-spacing: 0.01em;
    text-align: center;
    left: 0;
    right: 0;
    pointer-events: none;
    position: relative;

    @media screen and (min-width: 1024px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .menu-left {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: flex-start;
  }

  .menu-right {
    display: flex;
    justify-content: flex-end;
  }

  button {
    pointer-events: all;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #b7aeb4;
    border-radius: 20%;
    width: 3rem;
    height: 3rem;
    margin: 0 0.25vh;
    transition: transform 0.5s ease-in-out;
    z-index: 10;
  }

  img {
    background-color: #251d3a;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 20%;
  }

  #help {
    background-color: #251d3a;
    color: #b7aeb4;
    font-size: 2rem;
  }
</style>
