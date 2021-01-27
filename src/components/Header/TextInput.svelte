<script>
  export let controlType = null;
  export let placeholder;
  export let value;
  export let required = null;
  export let minRows = 1;
  export let maxRows = 1;

  $: minHeight = `${1 + minRows * 1.2}em`;
  $: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;
</script>

<div class="form-control">
  {#if controlType === "textarea"}
    <pre
      aria-hidden="true"
      style="min-height: {minHeight}; max-height: {maxHeight}">{value + '\n'}</pre>

    <textarea {placeholder} bind:value />
  {:else}
    <input type="text" {placeholder} {required} bind:value />
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
    position: relative;
  }
  pre,
  textarea {
    font-family: inherit;
    padding: 0.5em;
    box-sizing: border-box;
    border: 1px solid #eee;
    line-height: 1.2;
    overflow: hidden;
  }

  textarea {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    resize: none;
  }
</style>
