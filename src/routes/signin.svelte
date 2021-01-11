<script>
  import SignForm from "../components/SignForm.svelte";
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
  <SignForm on:submit={({ detail }) => console.log(detail)} />
</main>
