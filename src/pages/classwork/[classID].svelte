<script>
  import Button from "../../components/Header/Button.svelte";
  import { params } from "@roxi/routify";
  import NewAssignment from "../../components/NewAssignment.svelte";
  import AssignmentCard from "../../components/AssignmentCard.svelte";

  console.log($params.classID);
  let showForm = false;
</script>

{#if showForm}
  <NewAssignment
    on:submit={() => console.log("submit")}
    on:exit={() => (showForm = false)}
  />
{/if}

<div class="container">
  <aside class="topics-menu">
    <ul>
      <li>topic 1</li>
      <li>topic 2</li>
      <li>topic 4</li>
      <li>topic 5</li>
    </ul>
  </aside>
  <main>
    <!-- dropdown menu for mobile -->
    <select>
      <option value="">All topics</option>
      <option value="topic 1">topic 1</option>
      <option value="topic 2">topic 2</option>
      <option value="topic 3">topic 3</option>
      <option value="topic 4">topic 4</option>
      <option value="topic 5">topic 5</option>
    </select>
    <Button on:click={() => (showForm = true)} type="confirm-filled"
      >Create</Button
    >
    <div class="content">
      <AssignmentCard />
    </div>
  </main>
</div>

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
