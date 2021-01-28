<script>
  import { notes, menu_down } from "../../utils/image-constants";

  export let instructor = undefined;
  export let title = undefined;
  export let timeCreated = undefined;
  export let timeEdited = undefined;
  export let edited = undefined;
</script>

<main class="roboto class-shadow flex-r">
  <section class="work-tag flex-r">
    <div class="flex-c image-wrapper">
      <span />
      <img src={notes} class="user" alt="students" />
    </div>
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

  .image-wrapper {
    position: relative;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: unset;
    margin-right: 13px;
  }

  .image-wrapper span {
    right: 4px;
    top: 1px;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #4285f4;
    border-radius: 50%;
    border: unset;
    z-index: 2;
  }

  .image-wrapper img {
    z-index: 3;
    width: 29px;
  }
</style>
