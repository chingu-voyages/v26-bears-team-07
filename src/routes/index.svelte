<!-- TODO: We should decide whether the main page should display information on the app
Sort of like a landing home page. TBD -->
<script>
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

<a href="/home">Home</a>
<a href="/signin">Sign in</a>
<a href="/signup">Sign up</a>
<a href="/stream">Stream</a>

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
