<script>
  import { fade } from "svelte/transition";
  import { notes, menu_down, plus } from "../utils/image-constants";
  import { createEventDispatcher } from "svelte";
  import Button from "./Header/Button.svelte";
  import Modal from "./Reusable/Modal.svelte";
  import dayjs from "dayjs";
  import { clickOutside } from "../utils/utils";

  export let title = "Assignment Title";
  export let comments = undefined;
  export let due = undefined;
  export let timeCreated = undefined;
  export let edited = undefined;
  export let text = "Sample text";
  export let id;

  let dispatch = createEventDispatcher();
  let showDetail = false;

  title = `${title.substring(0, 25)}${title.length > 25 ? "..." : ""}`;

  const deleteAssignment = () => {
    // deletes assignment
  };

  const edit = () => {
    dispatch("editAssignment");
  };
</script>

<div
  use:clickOutside
  on:click_outside={() => (showDetail = false)}
  class="assignment-card"
  class:outline={showDetail}
>
  <main on:click={() => (showDetail = !showDetail)} class="roboto flex-r">
    <section class="work-tag flex-r">
      <div class="flex-c image-wrapper">
        <span />
        <img src={notes} class="user" alt="students" />
      </div>
      <div class="work-details flex-c">
        <span>{title}</span>
      </div>
    </section>
    <section class="edit flex-r">
      <span>
        {#if !showDetail}
          Posted {dayjs(timeCreated).format("MM/DD/YYYY") || "10:08PM"}
        {/if}
        {#if due} (Due {dayjs(due).format("MM/DD/YYYY")}) {/if}
      </span>
    </section>
  </main>
  {#if showDetail}
    <div in:fade class="wide-detail">
      <section class="wide-text">
        <span>
          Posted {dayjs(timeCreated).format("MM/DD/YYYY") || "10:08PM"}
          {#if edited} (Edited {edited}) {/if}
        </span>
        <p>{text}</p>
        {#if comments}
          <ul class="comments">
            {#each comments as comment}
              <li>{comment}</li>
            {/each}
          </ul>
        {/if}
      </section>
      <section class="wide-footer">
        <!-- TODO: link to assignment route -->
        <Button type="confirm"
          ><a href="/assignments/{id}">View Assignment</a></Button
        >
        <!-- TODO: check user's role -->
        <Button on:click={deleteAssignment}>Delete</Button>
        <Button on:click={edit}>Edit</Button>
      </section>
    </div>
  {/if}
</div>

{#if showDetail}
  <div transition:fade class="modal-container">
    <Modal>
      <div class="detail-modal">
        <section class="work-tag flex-r">
          <div class="flex-c image-wrapper">
            <span />
            <img src={notes} class="user" alt="students" />
          </div>
          <div class="work-details flex-c">
            <span>{title}</span>
          </div>
          <span on:click={() => (showDetail = false)} class="modal-exit">
            <img src={plus} alt="exit" />
          </span>
        </section>
        <section class="modal-text">
          <span>
            Posted {dayjs(timeCreated).format("MM/DD/YYYY") || "10:08PM"}
            {#if due} (Due {dayjs(due).format("MM/DD/YYYY")}) {/if}
          </span>
          <p>{text}</p>
        </section>
        <section class="modal-footer">
          <!-- TODO: link to assignment route -->
          <Button type="confirm"
            ><a href="/assignments/{id}">View Assignment</a></Button
          >
          <Button on:click={deleteAssignment}>Delete</Button>
          <Button on:click={edit}>Edit</Button>
        </section>
      </div>
    </Modal>
  </div>
{/if}

<style>
  .assignment-card {
    border-radius: 8px;
  }

  main {
    max-height: 90px;
    padding: 1rem;
    justify-content: space-between;
    cursor: pointer;
  }

  .work-tag img {
    margin-right: 10px;
    width: 40px;
  }

  .work-details {
    margin: 13px 0 2px 0;
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

  .edit span {
    font-size: 10px;
    margin-right: 20px;
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

  .wide-detail {
    display: none;
  }

  .menu {
    display: none;
    border-radius: 50%;
  }

  .wide-text {
    border-bottom: 1px solid #cdcdcd;
    padding: 1rem 1rem;
  }

  .wide-text span {
    font-size: 10px;
  }

  .wide-footer {
    padding: 0.5rem;
  }

  .detail-modal {
    width: 90%;
    position: relative;
    top: 10rem;
    left: 1.5rem;
    height: 50vh;
    background-color: white;
    border-radius: 5px;
  }

  .detail-modal .work-tag {
    padding: 1rem;
    border-bottom: 1px solid #cdcdcd;
  }

  .modal-exit {
    margin-left: auto;
    border-radius: 50%;
    cursor: pointer;
  }

  .modal-exit img {
    transform: rotate(45deg);
    margin: auto;
  }

  .modal-text {
    border-bottom: 1px solid #cdcdcd;
    padding: 1rem;
    height: 72%;
  }

  .modal-text span {
    font-size: 10px;
  }

  .modal-footer {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
  }

  .outline {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.212);
  }

  .outline main {
    border-bottom: 1px solid #cdcdcd;
  }

  .assignment-card:hover {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.212);
  }

  main:hover .menu {
    display: inherit;
  }

  .menu:hover {
    background-color: #eee;
  }

  .modal-exit:hover {
    background-color: #eee;
  }

  @media (min-width: 640px) {
    .modal-container {
      display: none;
    }
    .wide-detail {
      display: inherit;
    }
  }
</style>
