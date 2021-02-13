<script>
  import { params } from "@roxi/routify";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { authStore } from "../stores/auth";
  import {
    useCreateAssignment,
    usersByClassID,
    useUpdateAssignment,
  } from "../stores/query";
  import { plus } from "../utils/image-constants";
  import Button from "./Header/Button.svelte";
  import TextInput from "./Header/TextInput.svelte";
  import dayjs from "dayjs";
  import utc from "dayjs/plugin/utc";
  import StudentSelect from "./Streams/StudentSelect.svelte";
  dayjs.extend(utc);

  export let title = "";
  export let text = "";
  export let points = "100";
  export let due = "";
  export let type = "ESSAY";
  export let classID;
  export let assignmentID;
  let assignees;
  export let update = false;
  let allStudents;

  const dispatch = createEventDispatcher();

  let users = usersByClassID({ classID: $params.classID });

  const [createAssignment, createAssignStore] = useCreateAssignment();

  $: console.log($createAssignStore, "assignment stores");
  $: if ($users.data) allStudents = [...$users.data.result.students.data];
  const submit = () => {
    if (!update) {
      createAssignment({
        title,
        text,
        points: parseInt(points),
        due,
        creator: $authStore.id,
        type,
        created: dayjs.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
        assignees: [...allStudents],
        classID,
      });
    } else {
      useUpdateAssignment({
        id: assignmentID,
        title,
        text,
        points: parseInt(points),
        due,
        creator: $authStore.id,
        type,
        created: dayjs.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
        assignees: [...allStudents],
        classID,
      });
    }
    dispatch("exit");
  };

  $: console.log(assignees);
</script>

<div transition:fly={{ y: -500 }} class="shadow">
  <header>
    <div class="left-content">
      <div class="exit" on:click={() => dispatch("exit")}>
        <img alt="add-class" src={plus} />
      </div>
      <h3>Assignment</h3>
    </div>
    <Button on:click={submit} type="confirm-filled"
      >{update ? "Update" : "Assign"}</Button
    >
  </header>
  <div class="container">
    <main>
      <div class="top">
        <div class="top-select">
          <StudentSelect />
        </div>
      </div>
      <TextInput bind:value={title} placeholder="Title" />
      <select bind:value={type} name="type" class="type">
        <option value="ESSAY">Essay</option>
        <option value="SHORT_ANSWER">Short Answer</option>
      </select>
      <TextInput
        bind:value={text}
        controlType="textarea"
        minRows={4}
        maxRows={40}
        placeholder="Instructions"
      />
      {#if type === "MULTIPLE_CHOICE"}
        <ul>
          <li><TextInput /></li>
        </ul>
      {/if}
    </main>
    <aside>
      <div class="top">
        <div class="top-select">
          <StudentSelect />
        </div>
      </div>
      <div class="form">
        <label for="points">Points</label>
        <input bind:value={points} type="number" />
        <label for="due">Due</label>
        <input bind:value={due} type="date" />
      </div>
    </aside>
  </div>
</div>

<style>
  header {
    display: flex;
    border-bottom: 1px solid #cdcdcd;
    padding: 1rem;
    justify-content: space-between;
  }

  img {
    transform: rotate(45deg);
  }

  .left-content {
    display: flex;
    align-items: center;
  }

  .shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 10;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }

  aside {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    flex-basis: 100%;
    border-top: 1px solid #cdcdcd;
  }

  main {
    padding: 1rem;
    flex-grow: 1;
    height: 50%;
  }

  label {
    margin: 0.5rem 0;
    width: 100%;
  }

  .type {
    width: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  .exit {
    width: fit-content;
    cursor: pointer;
  }

  aside .top {
    display: none;
  }

  @media (min-width: 800px) {
    aside {
      flex-basis: 150px;
      border: none;
    }
    main {
      border-right: 1px solid #cdcdcd;
      height: 100%;
    }
    aside .top {
      display: flex;
      flex-direction: column;
    }
    .top-select {
      display: flex;
    }

    main .top {
      display: none;
    }
  }

  @media (min-width: 800px) {
    aside {
      flex-basis: 250px;
    }
  }
</style>
