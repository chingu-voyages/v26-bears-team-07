<script>
  import Button from "../../components/Header/Button.svelte";
  import { params } from "@roxi/routify";
  import NewAssignment from "../../components/NewAssignment.svelte";
  import AssignmentCard from "../../components/AssignmentCard.svelte";
  import { assignmentsByClassID } from "../../stores/query";

  let title = "";
  let text = "";
  let points = "100";
  let due = "";
  let type = "ESSAY";
  let assignees = "all";
  let choices = [];
  let assignmentID;
  let update = false;

  // TODO: fetch class data
  const assignmentsQuery = assignmentsByClassID({ classID: $params.classID });
  let assignments = [];
  $: if ($assignmentsQuery.data)
    assignments = [...$assignmentsQuery.data.result.assignments.data];

  let showForm = false;
  const create = () => {
    title = "";
    text = "";
    type = "ESSAY";
    due = "";
    showForm = true;
  };

  const edit = () => {
    console.log("hi");
  };
</script>

<!-- TODO: allow draging for reordering -->
<!-- [null, {}] -->
<!-- TODO: only include for teachers -->
{#if showForm}
  <NewAssignment
    {title}
    {text}
    {type}
    {update}
    {due}
    {assignmentID}
    classID={$params.classID}
    on:exit={() => {
      showForm = false;
      update = false;
    }}
  />
{/if}

<div class="container">
  <aside class="topics-menu" />
  <main>
    <!-- dropdown menu for mobile -->
    <!-- TODO: only show for teachers -->
    <Button on:click={create} type="confirm-filled">Create</Button>
    <div class="content">
      {#if assignments.length > 0}
        {#each assignments as assignment}
          <AssignmentCard
            title={assignment.title}
            text={assignment.text}
            due={assignment.due}
            timeCreated={assignment.created}
            id={assignment._id}
            on:editAssignment={() => {
              title = assignment.title;
              text = assignment.text;
              due = assignment.due;
              type = assignment.type;
              assignmentID = assignment._id;
              showForm = true;
              update = true;
              console.log(assignmentID);
            }}
          />
        {/each}
      {:else}
        <p>No assignments yet!</p>
      {/if}
    </div>
  </main>
</div>

<!-- TODO: only include for teachers -->
<style>
  .container {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  aside {
    width: 240px;
  }

  select {
    display: none;
    width: 100%;
  }

  ul {
    list-style: none;
  }

  main {
    width: 100%;
    max-width: 760px;
  }

  .content {
    padding: 1rem 0;
  }

  @media (max-width: 960px) {
    aside {
      display: none;
    }
    select {
      display: inherit;
    }
  }
</style>
