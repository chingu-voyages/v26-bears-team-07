<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  import TextInput from "./TextInput.svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch("cancel");
  }
</script>

<div transition:fade class="modal-backdrop" on:click={closeModal} />
<div transition:fly={{ y: 200 }} class="modal">
  <h1>New Class</h1>
  <div class="content">
    <TextInput placeholder="Class Name (required)" />
    <TextInput placeholder="Section" />
    <TextInput placeholder="Subject" />
    <TextInput placeholder="Room" />
  </div>
  <footer>
    <Button on:click={() => dispatch("cancel")}>Cancel</Button>
    <Button type="confirm">Create</Button>
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
    overflow: auto;
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
    padding: 0.5rem;
    text-align: right;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>
