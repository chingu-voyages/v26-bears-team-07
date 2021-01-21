<script>
  import { authStore } from "../stores/auth";

  export let up = false;
  let name = "",
    password = "",
    confirm = "";
  let title = !up ? "Sign in" : "Create your Account";

  async function handleSubmit() {
    if (up && password != confirm) return; // TODO: Error handling if confirm isn't same as password

    var res = await fetch(`/.netlify/functions/${!up ? "signin" : "signup"}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
      }),
    });
    var { secret = "", instance: { "@ref": { id } } = "" } = await res.json();
    if (secret) {
      var authData = {
        secret,
        id,
      };

      localStorage.setItem("auth", JSON.stringify(authData));
      $authStore = authData;
      // TODO: Figure out if you can use GOTO from routify instead of native browser redirect API
      location.pathname = "/home";
    } else {
      // TODO: Client-side error handling if password/user incorrect
    }
  }
</script>

<!-- 
  @component
  Sign in & up form in one.
  Defaults to sign in.
  @prop {boolean} `up` Pass in for signup form & functionality.
 -->

<svelte:head>
  <title>{title}</title>
</svelte:head>

<form on:submit|preventDefault={handleSubmit}>
  <h1>{title}</h1>
  <input type="text" placeholder="Username" bind:value={name} required />
  <input
    type="password"
    placeholder="Password"
    bind:value={password}
    required
  />
  {#if up}
    <input
      type="password"
      placeholder="Confirm"
      bind:value={confirm}
      required
    />
  {/if}
  <div class="btn-group">
    <a href={!up ? "/signup" : "/signin"}
      >{!up ? "Create account" : "Sign in instead"}</a
    >
    <button>{!up ? "Sign In" : "Sign Up"}</button>
  </div>
</form>

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
