<script>
  import Button from "./Header/Button.svelte";
  import TextInput from "./Header/TextInput.svelte";
</script>

<div class="shadow">
  <header>
    <div class="exit" on:click>Exit</div>
    <h3>Assignment</h3>
  </header>
  <div class="container">
    <main>
      <div class="top">
        <label for="assignment">For</label>
        <select name="class" id="">
          <option value="">this class</option>
        </select>
        <select name="students" id="">
          <option value="all">All students</option>
        </select>
      </div>
      <TextInput placeholder="Title" />
      <TextInput controlType="textarea" minRows={4} maxRows={40} />
    </main>
    <aside>
      <div class="top">
        <label for="assignment">For</label>
        <select name="class" id="">
          <option value="">this class</option>
        </select>
        <select name="students" id="">
          <option value="all">All students</option>
        </select>
      </div>
      <div class="form">
        <label for="points">Points</label>
        <input type="number" />
        <label for="due">Due</label>
        <input type="date" />
        <label for="topic" />
        <select name="topic">
          <option value="none">No topic</option>
        </select>
        <label for="rubric">Rubric</label>
        <Button>Rubric</Button>
      </div>
    </aside>
  </div>
</div>

<style>
  header {
    display: flex;
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
    padding: 1rem;
  }

  main {
    flex-basis: 100%;
  }

  aside {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  .exit {
    width: fit-content;
    cursor: pointer;
    color: white;
    background: red;
  }

  aside .top {
    display: none;
  }

  @media (min-width: 640px) {
    aside {
      flex-basis: 150px;
    }
    main {
      flex-basis: 75%;
    }
    aside .top {
      display: inherit;
    }
    main .top {
      display: none;
    }
  }
</style>
