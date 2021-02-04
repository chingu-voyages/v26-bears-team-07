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

<section>
  <form on:submit|preventDefault={handleSubmit} class="flex-c">
    <h1>{title}</h1>
    <label for="username">Enter your username</label>
    <input
      type="text"
      id="username"
      placeholder="Username"
      autocomplete="username"
      use:focus
      bind:value={name}
      required
    />
    <label for="password">Enter your password</label>
    <input
      type="password"
      id="password"
      placeholder="Password"
      autocomplete="current-password"
      bind:value={password}
      required
    />
    {#if up}
      <label for="confirm">Confirm your password</label>
      <input
        on:change={({ currentTarget }) =>
          currentTarget.setCustomValidity(
            confirm == password ? "" : "Passwords do not match"
          )}
        type="password"
        id="confirm"
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
      <input value={!up ? "Sign In" : "Sign Up"} type="submit" />
    </div>
  </form>
</section>

<style>
  label {
    display: none;
  }
  form {
    padding: 40px;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 8px 0px #335bfd67;
    background-color: white;
    min-width: 40vw;
  }

  h1 {
    text-align: center;
  }

  a {
    border: rgba(128, 128, 128, 0.123) solid 1px;
    padding: 11px 9px;
    margin-right: 4px;
    flex-basis: 50%;
    text-align: center;
  }
  input[type="password"] {
    margin-top: 1rem;
  }
  input[type="submit"] {
    display: block;
    border: rgba(128, 128, 128, 0.123) solid 1px;
    padding: 7px;
    flex-basis: 50%;
  }

  .btn-group {
    display: flex;
    flex-flow: row nowrap;
    place-content: space-between;
    place-items: center;
    flex-direction: row;
    margin-top: 2rem;
  }
  /* TODO: Desktop dimensions at min-width 601px */
</style>
