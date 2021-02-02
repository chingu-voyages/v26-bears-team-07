<script>
  import SignForm from "../components/SignForm.svelte";
  // TODO: If signed in, redirect to either account sign out, or home page.
</script>

<main>
  <SignForm up />
</main>

<style>
  main {
    display: grid;
    place-items: center;
    min-height: 100vh;
    background: #c8e6f5;
  }

  /* TODO: Desktop dimensions at min-width 601px */
</style>
