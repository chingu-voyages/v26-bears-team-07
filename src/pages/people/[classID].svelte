<script>
  import { params } from "@roxi/routify";
  import { slide } from "svelte/transition";
  import { usersByClassID } from "../../stores/query";
  import { add_user, teacher } from "../../utils/image-constants";
  import Modal from "../../components/Reusable/Modal.svelte";
  import People from "../../components/Invites/People.svelte";

  let classData = usersByClassID({ classID: $params.classID });
  let showModal;
  let actioned;

  let invite;
  let teachers = [];
  let students = [];
  $: if ($classData?.data) {
    ({
      invite,
      teachers: { data: teachers },
      students: { data: students },
    } = $classData.data.result);
  }

  function toggeleModal(mode) {
    actioned = mode;
    showModal = true;
  }
</script>

{#if showModal}
  <Modal>
    <People
      inviteMode={actioned}
      inviteLink={invite
        ? `${location.origin}/invite/${$params.classID}?cjc=${invite}`
        : null}
      on:closeModal={() => (showModal = false)}
    />
  </Modal>
{/if}
<main>
  <section>
    <div class="flex-r header">
      <h2>Teachers</h2>
      <div
        class="flex-c image-wrapper"
        on:click={() => toggeleModal("Teacher")}
      >
        <span />
        <img src={add_user} alt="students" />
      </div>
    </div>
    {#each teachers as { name }}
      <p class="flex-r" transition:slide>
        <img src={teacher} alt="students-avatar" />
        {name}
      </p>
    {/each}
  </section>

  <section>
    <div class="flex-r header">
      <h2>Students</h2>
      <div
        class="flex-c image-wrapper"
        on:click={() => toggeleModal("Student")}
      >
        <span />
        <img src={add_user} alt="instructors" />
      </div>
    </div>
    {#each students as { name }}
      <p transition:slide>{name}</p>
    {/each}
  </section>
</main>

<style>
  main {
    margin: 3rem auto;
    width: 50%;
    max-width: 1000px;
  }

  main section:nth-child(1) {
    margin-bottom: 50px;
  }

  h2 {
    color: #4285f4;
    font-size: 32px;
    line-height: 40px;
  }
  .header {
    width: 100%;
    justify-content: space-between;
    border-bottom: #4285f4 2px solid;
    padding-bottom: 5px;
  }

  img {
    width: 25px;
    height: 25px;
  }

  p {
    align-items: center;
  }

  p img {
    margin-right: 10px;
  }

  .image-wrapper {
    position: relative;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }

  span {
    right: 4px;
    top: 1px;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(100, 148, 237, 0.11);
    border-radius: 50%;
    opacity: 0;
    z-index: 4;
  }
  span:hover {
    opacity: 8;
  }
</style>
