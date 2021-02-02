<script>
  import { authStore } from "../stores/auth";
  import { focus, params } from "@roxi/routify";

  export let up = false;
  let name = "",
    password = "",
    confirm = "";
  let title = !up ? "Sign in" : "Create your Account";

  if ($authStore) location.pathname = "/home";

  async function handleSubmit() {
    if (up && password != confirm) return;

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

      if ($params?.cjc)
        location.href = `${location.origin}/invite/${$params.classID}?cjc=${$params.cjc}`;
      else location.pathname = "/home";
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
  <label for="username" />
  <input
    type="text"
    placeholder="Username"
    autocomplete="username"
    use:focus
    bind:value={name}
    required
  />
  <label for="password" />
  <input
    type="password"
    placeholder="Password"
    autocomplete="current-password"
    bind:value={password}
    required
  />
  {#if up}
    <label for="confirm" />
    <input
      on:change={({ currentTarget }) =>
        currentTarget.setCustomValidity(
          confirm == password ? "" : "Passwords do not match"
        )}
      type="password"
      placeholder="Confirm"
      autocomplete="new-password"
      bind:value={confirm}
      required
    />
  {/if}
  <div class="btn-group">
    <a
      href={!up
        ? `/signup${
            $params?.cjc
              ? `?classID=${$params?.classID}&cjc=${$params.cjc}`
              : ""
          }`
        : `/signin${
            $params?.cjc
              ? `?classID=${$params?.classID}&cjc=${$params.cjc}`
              : ""
          }`}>{!up ? "Create account" : "Sign in instead"}</a
    >
    <input type="submit" value={!up ? "Sign In" : "Sign Up"} />
  </div>
</form>

<style>
  form {
    padding: 40px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.212);
    border-radius: 0.5rem;
  }

  h1 {
    text-align: center;
  }
  input {
    width: 100%;
  }
  input[type="password"] {
    margin-top: 1rem;
  }
  input[type="submit"] {
    display: block;
    width: fit-content;
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
