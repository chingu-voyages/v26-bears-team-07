<script>
  import { params } from "@roxi/routify";
  import Badge from "../../components/Streams/Badge.svelte";
  import Announcer from "../../components/Streams/Announcer.svelte";
  import Tasks from "../../components/Streams/Tasks.svelte";

  console.log($params.classID);
</script>

<main>
  <Badge />
  <div class="flex-r announcements">
    <div><Tasks /></div>
    <div><Announcer /></div>
  </div>
</main>

<style>
  main {
    padding: 3em 13em;
  }

  .announcements div:nth-child(1) {
    flex-basis: 20%;
  }

  .announcements div:nth-child(2) {
    flex-basis: 80%;
    margin: 0 0 1rem 2rem;
  }
</style>
