<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  import TextInput from "./TextInput.svelte";
  import Button from "./Button.svelte";
  import { useCreateClass } from "../../stores/query";
  import { authStore } from "../../stores/auth";
  import { redirect } from "@roxi/routify";

  const [createClass, res] = useCreateClass();

  const dispatch = createEventDispatcher();

  let name, section, subject, room;

  function closeModal() {
    dispatch("cancel");
  }

  // on successful creation, navigate to class
  $: if ($res.data) {
    closeModal();
    $redirect(`/stream/${$res.data.result["_id"]}`);
  }
</script>

<div transition:fade class="modal-backdrop" on:click={closeModal} />
<form
  transition:fly={{ y: 200 }}
  class="modal"
  on:submit|preventDefault={() =>
    createClass({ name, id: $authStore.id, section, subject, room })}
>
  <h1>New Class</h1>
  <div class="content">
    <TextInput placeholder="Class Name (required)" required bind:value={name} />
    <TextInput placeholder="Section" bind:value={section} />
    <TextInput placeholder="Subject" bind:value={subject} />
    <TextInput placeholder="Room" bind:value={room} />
  </div>
  <footer>
    <Button type="submit">Create</Button>
    <Button on:click={() => dispatch("cancel")}>Cancel</Button>
  </footer>
</form>

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
    /* Reverse order of buttons, form submit enter action always uses first button */
    display: flex;
    flex-flow: row-reverse;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>
