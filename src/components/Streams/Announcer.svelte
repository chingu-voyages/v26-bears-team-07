<script>
  import { teacher } from "../../utils/image-constants";
  export let announcerImage = undefined;
</script>

<main class="roboto class-shadow">
  <div class="announcer flex-r">
    <img class="user" src={announcerImage || teacher} alt="announcer" />
    <a class="open-sans" href="/stream">Announce something to your class</a>
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
  a {
    font-size: 12px;
    color: gray;
  }

  a:hover{
    color:rgba(0, 132, 255, 0.74);
  }

  .user {
    width: 40px;
  }
</style>
