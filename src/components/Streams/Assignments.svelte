<script>
  import { createEventDispatcher } from "svelte";
  import { teacher, menu_down } from "../../utils/image-constants";

  export let instructor;
  export let title;
  export let timeCreated;
  export let timeEdited = undefined;
  export let edited;
</script>

<main class="roboto class-shadow flex-r">
  <section class="work-tag flex-r">
    <img class="user" src={teacher} alt="announcer" />
    <div class="work-details flex-c">
      <span
        >{instructor || "Test teacher"} posted a new assignment: {title ||
          "data analytics 1"}</span
      >
      <span
        >{timeCreated || "10:08PM"}
        {#if edited} (Edited {timeEdited}) {/if}</span
      >
    </div>
  </section>
  <section class="edit flex-c">
    <img class="user" src={menu_down} alt="menu" />
  </section>
</main>

<style>
  main {
    max-height: 90px;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 0px;
    justify-content: space-between;
  }

  .work-tag img {
    margin-right: 10px;
    width: 40px;
  }

  .work-details span:nth-child(1) {
    margin: 7px 0 2px 0;
    font-size: 10px;
    font-weight: 600;
  }

  .work-details span:nth-child(2) {
    font-size: 12px;
    filter: opacity(50%);
  }

  .edit {
    justify-content: center;
    align-items: center;
  }

  .edit img {
    width: 25px;
  }
</style>
