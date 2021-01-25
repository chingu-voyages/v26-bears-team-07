<script>
  import Button from "../../components/Header/Button.svelte";
  import { params } from "@roxi/routify";
  import NewAssignment from "../../components/NewAssignment.svelte";

  console.log($params.classID);
  let showForm = false;
</script>

{#if showForm}
  <NewAssignment on:click={() => (showForm = false)} />
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
      <div class="assignment">
        <div class="icon" />
        Assignment 1
      </div>
      <div class="assignment">
        <div class="icon" />
        Assignment 2
      </div>
      <div class="assignment">
        <div class="icon" />
        Assignment 3
      </div>
      <div class="assignment">
        <div class="icon" />
        Assignment 4
      </div>
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
    padding: 0.75rem;
    margin: 0 0 1rem 0;
    border: 1px solid #dedede;
    border-radius: 5px;
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

  .assignment {
    height: 3.75rem;
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .icon {
    width: 36px;
    height: 36px;
    background-color: #ccc;
    margin: 0 1rem;
    border-radius: 50%;
  }

  .assignment:hover {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.212);
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
