<script>
  import { params } from "@roxi/routify";
  import Badge from "../../components/Streams/Badge.svelte";
  import Announcer from "../../components/Streams/Announcer.svelte";
  import Tasks from "../../components/Streams/Tasks.svelte";
  import { findClass } from "../../stores/query";

  let classData = findClass({ classID: $params.classID });
  let inviteCode, className;

  $: if ($classData.data) {
    ({ invite: inviteCode, name: className } = $classData.data.result);
  }
</script>

<main>
  <Badge {inviteCode} {className} />
  <div class="flex-r announcements">
    <div><Tasks /></div>
    <div><Announcer /></div>
  </div>
</main>

<style>
  main {
    margin: 3rem auto;
    width: 90%;
    max-width: 1000px;
  }

  .announcements div:nth-child(1) {
    width: 210px;
    margin: 0 1rem 0 0;
  }

  .announcements div:nth-child(2) {
    flex-grow: 1;
  }

  @media (max-width: 780px) {
    .announcements div:nth-child(1) {
      display: none;
    }
  }
</style>
