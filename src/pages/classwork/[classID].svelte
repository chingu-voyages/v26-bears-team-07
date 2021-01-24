<script>
  import Button from "../../components/Header/Button.svelte";
  import { params } from "@roxi/routify";

  console.log($params.classID);
</script>

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
    <Button type="confirm-filled">Create</Button>
    <div class="content">
      <div class="assignment">Assignment 1</div>
      <div class="assignment">Assignment 2</div>
      <div class="assignment">Assignment 3</div>
      <div class="assignment">Assignment 4</div>
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
    height: 2rem;
    margin: 0.5rem 0;
  }

  @media (max-width: 960px) {
    aside {
      display: none;
    }
  }
</style>
