<script>
  import Badge from "../components/Streams/Badge.svelte";


  if (typeof window !== "undefined" && location.search) {
    let params = new URLSearchParams(location.search);
    var id = params.get("id");
    console.log(id);
  }
</script>

<main>
  <Badge  />
</main>

<style>
  main{
    padding: 3em 13em;
  }
</style>