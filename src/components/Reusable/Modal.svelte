<main>
  <section class="modal-container flex-c">
    <slot />
  </section>
</main>


<style>
  .modal-container{
    position: fixed;
    z-index: 7;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.288);
  }
</style>