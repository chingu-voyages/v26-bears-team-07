<script>
  import Badge from "../components/Streams/Badge.svelte";
  import Announcer from "../components/Streams/Announcer.svelte";
  import Tasks from "../components/Streams/Tasks.svelte";

  if (typeof window !== "undefined" && location.search) {
    let params = new URLSearchParams(location.search);
    var id = params.get("id");
    console.log(id);
  }
</script>

<main>
  <Badge />
  <div class="flex-r announcements">
    <div> <Tasks /></div>
    <Announcer />
  </div>
</main>

<style>
  main {
    padding: 3em 13em;
  }

  .announcements div:nth-child(1){
    flex-basis: 20%;
  }

  /* .announcements:nth-child(1) */
</style>
