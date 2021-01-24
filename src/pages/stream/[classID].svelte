<script>
  import { params } from "@roxi/routify";
  import Badge from "../../components/Streams/Badge.svelte";
  import Announcer from "../../components/Streams/Announcer.svelte";
  import Announce from "../../components/Streams/Announce.svelte";
  import Tasks from "../../components/Streams/Tasks.svelte";
  import { findClass } from "../../stores/query";

  let classData = findClass({ classID: $params.classID });
  let inviteCode, className
  let addAnnouncement = true;

  $: if ($classData.data) {
    ({ invite: inviteCode, name: className } = $classData.data.result);
  }

  const createAnnouncement = () => addAnnouncement = false;
</script>

<main>
  <Badge {inviteCode} {className} />
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
