<script>
  import { createEventDispatcher } from "svelte";

  export let up;
  let name = "",
    pw = "",
    confirm = "";
  const dispatch = createEventDispatcher();
  let title = !up ? "Sign in" : "Create your Account";
</script>

<style>
  h1 {
    text-align: center;
  }
  input {
    width: 100%;
  }
  input[type="password"] {
    margin-top: 1rem;
  }
  button {
    display: block;
  }
  .btn-group {
    display: flex;
    flex-flow: row nowrap;
    place-content: space-between;
    place-items: center;
    margin-top: 2rem;
  }
  /* TODO: Desktop dimensions at min-width 601px */
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<form
  on:submit|preventDefault={() => dispatch('submit', { name, pw, confirm })}>
  <h1>{title}</h1>
  <input type="text" placeholder="Username" bind:value={name} required />
  <input type="password" placeholder="Password" bind:value={pw} required />
  {#if up}
    <input
      type="password"
      placeholder="Confirm"
      bind:value={confirm}
      required />
  {/if}
  <div class="btn-group">
    <a
      href={!up ? '/signup' : '/signin'}>{!up ? 'Create account' : 'Sign in instead'}</a>
    <button>{!up ? 'Sign In' : 'Sign Up'}</button>
  </div>
</form>
