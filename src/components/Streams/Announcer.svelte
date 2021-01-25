<script>
  import { createEventDispatcher } from "svelte";
  import { teacher } from "../../utils/image-constants";

  export let announcerImage = undefined;

  let dispatch = createEventDispatcher();

  function addAnnouncement(){
   dispatch('add_announcement');
  };
</script>

<main class="roboto class-shadow">
  <div class="announcer flex-r">
    <img class="user" src={announcerImage || teacher} alt="announcer" />
    <!-- <span class="open-sans" on:click={addAnnouncement}>
      Announce something to your class
    </span> -->
    <span class="open-sans">
      Announce something to your class
    </span>
  </div>
</main>

<style>
  main {
    max-height: 90px;
    border-radius: 8px;
    padding: 10px;
  }
  .announcer {
    align-items: center;
  }

  img {
    margin-right: 5px;
  }
  span {
    font-size: 12px;
    color: gray;
    cursor: default;
  }

  span:hover {
    color: rgba(0, 132, 255, 0.74);
  }

  .user {
    width: 40px;
  }
</style>