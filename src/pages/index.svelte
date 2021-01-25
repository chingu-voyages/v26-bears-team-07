<!-- TODO: We should decide whether the main page should display information on the app
Sort of like a landing home page. TBD -->
<script>
  // TODO: If you care about dynamic metatags, add them here. Otherwise, delete example later.
  // import { metatags } from '@roxi/routify'
  // metatags.title = 'My Routify app'
  // metatags.description = 'Description coming soon...'
  import { authStore } from "../stores/auth";
</script>

<svelte:head>
  <title>Classroom TODO: Title</title>
</svelte:head>

<h1>Great success!</h1>

<p>
  <strong
    >Try editing this file (src/routes/index.svelte) to test live reloading.</strong
  >
</p>

<a href="/signin" target="_self">Sign in</a>
<a href="/signup" target="_self">Sign up</a>

{#if $authStore?.secret}
  <hr />
  <h2>Gated content</h2>
  <a href="/home">Home</a>
{/if}

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
