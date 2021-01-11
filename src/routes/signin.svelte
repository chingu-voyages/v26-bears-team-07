<script>
  import SignForm from "../components/SignForm.svelte";
  // TODO: If signed in, redirect to either account sign out, or home page.
</script>

<style>
  main {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 48px 40px 36px;
  }

  /* TODO: Desktop dimensions at min-width 601px */
</style>

<main>
  <SignForm />
</main>
