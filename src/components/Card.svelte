<script>
  export let owner = "Timothy Leonard";
  export let text =
    "I recommend you don't fire until you're within 40,000 kilometers. Fate protects fools, little children and ships named Enterprise. A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you.";
</script>

<div class="container">
  <div class="top">
    <header>
      <div class="avatar" />
      <div class="title">
        <h4>{owner}</h4>
        <p>10:06 AM</p>
      </div>
      <div class="button" />
    </header>
    <article>
      {text}
    </article>
  </div>
  <footer>
    <div class="avatar-small" />
    <div class="textarea" />
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
    padding: 1rem;
    border-bottom: 1px solid #aaa;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
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

  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-left: auto;
  }

  footer {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  .avatar-small {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 0.5rem;
  }
</style>
