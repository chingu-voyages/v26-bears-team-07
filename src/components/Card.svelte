<script>
  import Button from "./Header/Button.svelte";
  export let type;
  export let title = "Timothy Leonard";
  export let text =
    "I recommend you don't fire until you're within 40,000 kilometers. Fate protects fools, little children and ships named Enterprise. A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you.";
</script>

<div class="container {type}">
  <div class="top">
    <header class={type}>
      {#if type === "comment"}
        <div class="avatar" />
        <div class="title">
          <h4>{title}</h4>
          <p>TIME</p>
        </div>
        <div class="button" />
      {:else if type === "classDetail"}
        <h4>{title}</h4>
        <p>section</p>
      {/if}
    </header>
    <article>
      {#if type === "classDetail"}
        <ul>
          {#each text as assignment}
            <li>{assignment}</li>
          {/each}
        </ul>
      {/if}
      {#if type === "comment"}
        {text}
      {/if}
    </article>
  </div>
  <footer class={type}>
    {#if type === "comment"}
      <div class="avatar-small" />
      <div class="textarea" />
    {:else if type === "classDetail"}
      <div class="button" />
      <div class="button" />
    {/if}
  </footer>
</div>

<style>
  .container {
    border: 1px solid #aaa;
    width: 90%;
    max-width: 800px;
    margin: 1rem;
    border-radius: 5px;
  }

  .top {
    border-bottom: 1px solid #aaa;
  }

  .top.comment {
    padding: 1rem;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }

  header.classDetail {
    background-color: blueviolet;
    color: white;
    padding: 2rem;
    margin: 0;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 10px;
  }

  h4 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: small;
  }

  li {
    list-style: none;
  }

  .classDetail article {
    height: 109px;
  }

  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-left: auto;
  }

  footer.comment {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  footer.classDetail {
    display: flex;
  }

  .avatar-small {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 0.5rem;
  }
</style>
