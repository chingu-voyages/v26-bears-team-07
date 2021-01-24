<script>
  export let controlType = null;
  export let placeholder;
  export let rows = null;
  export let type = "text";
  export let value;
  export let required = false;
</script>

<div class="form-control">
  {#if controlType === "textarea"}
    <textarea {rows} bind:value />
  {:else}
    <input {type} {placeholder} {required} />
  {/if}
</div>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid #eee;
    border-radius: 3px 3px 0 0;
    background: rgb(250, 250, 250);
    padding: 0.5rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: #1967d2;
    outline: none;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
</style>
