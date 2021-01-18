<script>
  export let type = "";
  export let size = "";
  export let disabled = false;

  let plus = "images/plus.svg";
</script>

<button class="{type} {size}" on:click {disabled}
  >{#if size === "large"}<span><img alt="plus sign" src={plus} /></span
    >{/if}<slot /></button
>

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

  .confirm-outline {
    color: rgb(25, 103, 210);
    border: 1px solid #ccc;
  }

  .confirm-outline:hover {
    background-color: rgba(25, 103, 210, 0.04);
    border: 1px solid rgba(25, 103, 210, 0.1);
  }

  .confirm-filled {
    background-color: rgb(25, 103, 210);
    color: white;
  }

  .confirm-filled:hover {
    background-color: rgba(25, 103, 210, 0.95);
    box-shadow: 1px 1px 1px rgba(25, 103, 210, 0.5);
  }
  .confirm-filled.large {
    padding: 0.75rem 2rem 0.5rem 0.75rem;
    font-size: 1rem;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    box-shadow: 1px 1px 1px rgba(25, 103, 210, 0.5);
  }

  .confirm-filled.confirm-filled.large:hover {
    box-shadow: 0px 2px 2px 2px rgba(25, 103, 210, 0.3);
  }

  img {
    margin-right: 1rem;
  }
</style>
