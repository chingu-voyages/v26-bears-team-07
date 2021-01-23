<script>
  import Badge from "../components/Streams/Badge.svelte";
  import Announcer from "../components/Streams/Announcer.svelte";
  import Tasks from "../components/Streams/Tasks.svelte";
  import Announce from "../components/Streams/Announce.svelte";

  let addAnnouncement = true;

  if (typeof window !== "undefined" && location.search) {
    let params = new URLSearchParams(location.search);
    var id = params.get("id");
    console.log(id);
  }

  const createAnnouncement = () => addAnnouncement = false;
  
</script>

<main>
  <Badge />
  <div class="flex-r announcements">
    <div><Tasks /></div>
    <div>
      {#if addAnnouncement}
        <Announcer on:add_announcement={() => createAnnouncement()} />
      {:else}
         <Announce />
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    padding: 3em 7em;
  }

  .announcements div:nth-child(1) {
    flex-basis: 20%;
  }

  .announcements div:nth-child(2) {
    flex-basis: 80%;
    margin: 0 0 1rem 2rem;
  }
</style>