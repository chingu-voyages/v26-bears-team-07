<script>
  export let type = "";
  export let color = "";
  export let size = "";
</script>

<button class="{type} {color} {size}" on:click><slot /></button>

<style>
  button {
    border: none;
    border-radius: 5px;
    color: #555;
    font-size: 0.9rem;
    padding: 0.6rem 0.5rem;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(250, 250, 250);
  }

  button:focus {
    outline: none;
  }

  .confirm {
    color: rgb(25, 103, 210);
  }

  .confirm:hover {
    background-color: rgba(25, 103, 210, 0.04);
  }
</style>
