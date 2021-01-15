<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch("cancel");
  }
</script>

<div transition:fade class="modal-backdrop" on:click={closeModal} />
<div transition:fly={{ y: 200 }} class="modal">
  <h1>New Class</h1>
  <div class="content">
    <label for="class">Class Name</label>
    <input type="text" />
    <label for="section">Section</label>
    <input type="text" />
    <label for="subject">Subject</label>
    <input type="text" />
    <label for="room">Room</label>
    <input type="text" />
  </div>
  <footer>
    <button on:click={() => dispatch("cancel")}>Cancel</button>
    <button>Create Class</button>
  </footer>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }

  h1 {
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid #ccc;
    font-family: "Roboto Slab", sans-serif;
  }

  .content {
    padding: 1rem;
  }

  footer {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>
