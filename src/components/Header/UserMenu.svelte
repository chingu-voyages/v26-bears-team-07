<script>
  import { fade } from "svelte/transition";
  import { authStore } from "../../stores/auth";
  import { clickOutside } from "../../utils/utils";

  export let open;
</script>

{#if open}
  <div
    class="menu"
    transition:fade={{ duration: 100 }}
    use:clickOutside
    on:click_outside
  >
    <div>
      <button
        on:click={() => {
          // warn: In a prod env, would use a logout serverless func to delete token.
          //  However, it'll expire eventually anyway.
          localStorage.removeItem("auth");
          $authStore = null;
          location.pathname = "/signin";
        }}>Logout</button
      >
    </div>
  </div>
{/if}

<style>
  .menu {
    position: absolute;
    right: 1rem;
  }
  .menu div {
    position: absolute;
    right: 0;
    top: -0.3rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    height: fit-content;
    width: fit-content;
    background-color: white;
    padding: 0.5rem 0;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.141), 0 1px 3px 0 rgba(0, 0, 0, 0.122);
  }
  .menu button {
    font-size: 0.9rem;
    border: none;
    white-space: nowrap;
    text-align: left;
    width: 100%;
    padding: 0.3rem 1rem;
  }
  .menu button:focus {
    outline: none;
  }
  .menu button:hover {
    background-color: #eee;
  }
</style>
