<script>
  import { params } from "@roxi/routify";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { authStore } from "../stores/auth";
  import { useCreateAssignment, usersByClassID } from "../stores/query";
  import { plus } from "../utils/image-constants";
  import Button from "./Header/Button.svelte";
  import TextInput from "./Header/TextInput.svelte";
  import dayjs from "dayjs";
  import utc from "dayjs/plugin/utc";
  import StudentSelect from "./Streams/StudentSelect.svelte";
  dayjs.extend(utc);

  let title = "";
  let text = "";
  let points = "100";
  let due = "";
  let topic = "";
  let type = "ESSAY";
  let assignees = 'all';
  let chioces = [];
  export let classID;

  const dispatch = createEventDispatcher();

  const [createAssignment, createAssignStore] = useCreateAssignment();
  //append students list from database
  const users = usersByClassID({ classID: $params.classID });
  let allStudents = [];
  $: console.log(allStudents);
  $: if ($users.data) allStudents = [...$users.data.result.students.data];
  const submit = () => {
    createAssignment({
      title,
      text,
      points: parseInt(points),
      due,
      creator: $authStore.id,
      type,
      created: dayjs.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      assignees: [...allStudents],
      classID
      /** TODO: Read this comment and add in the variables object.

      expected args, view in query.js
      $title: String!
      $text: String!
      $points: Int!
      $due: Date! 
      $type: AssignmentType!
      $created: Time!
      $assignees: [ID]!
      $creator: ID!

      usage example:
      createAssignment({
        title: "5th Essay",
        text: "It's an essay",
        points: 5,
        due: dayjs().format("YYYY-MM-DD"), // string with format yyyy-MM-dd
        type: "ESSAY", // other valid enumerations available in schema.gql under enum AssignmentType
        created: dayjs.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"), // string with format yyyy-MM-ddTHH:mm:ss.SSSZ
        assignees: [], // an array of IDs. Can be an empty array. Check above  declared allStudents arr for student
        // selection and IDs. This is set to nothing for now to get it working ASAP.
        creator: $authStore.id,
      })
      
      ! UPDATE: Do not touch dates. They are finished & imported. What you should be wiring up to get it working:
      - title
      - text
      - points (it's a number, not string) e.g. 5 not "5"
      - type (allcaps string, must be valid enum) e.g. "ESSAY" or "SHORT_ANSWER"

      Ask in Discord for further questions.
      */
    });
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
    <Button on:click={submit} type="confirm-filled">Assign</Button>
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
        <option value="MULTIPLE_CHOICE">Multiple Choice</option>
      </select>
      <TextInput
        bind:value={text}
        controlType="textarea"
        minRows={4}
        maxRows={40}
        placeholder="Instructions (optional)"
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
        <label for="topic" />
        <select bind:value={topic} name="topic">
          <option value="none">No topic</option>
        </select>
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
