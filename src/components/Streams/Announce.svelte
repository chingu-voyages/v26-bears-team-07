<script>
  import { createEventDispatcher } from "svelte";

  //append students list from database
  let options = ["All students"];
  let className;
  let dispatch = createEventDispatcher();

  function closeAnnoucement() {
    dispatch("closeAddAnouncement");
  }
</script>

<form class="flex-c class-shadow" method="POST" action="/stream">
  <h3 class="open-sans">For</h3>
  <div class="flex-r buttons">
    <div>
      <select name="test" id="test" class="class-options" disabled>
        <option value={className || "Test"}>{className || "Test"}</option>
      </select>
    </div>
    <div>
      <select name="students" id="students" class="students-options">
        {#each options as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="textbox">
    <textarea />
  </div>
  <div class="flex-r form-footer">
    <button class="flex-r attach-button">
      <span>Add</span>
    </button>
    <div class="flex-r posts open-sans">
      <button type="reset" value="reset" on:click={closeAnnoucement}
        >Cancel</button
      >
      <button type="submit">Post</button>
    </div>
  </div>
</form>

<style>
  form {
    padding: 30px;
    border-radius: 5px;
  }

  h3 {
    margin-bottom: 10x;
    filter: opacity(70%);
  }

  .class-options {
    padding: 10px 22px;
    border: unset;
    border-radius: 3px;
    margin-right: 7px;
  }

  .students-options {
    padding: 10px 22px;
    border: unset;
    color: rgba(0, 0, 0, 0.678);
    border-radius: 3px;
  }

  .students-options:focus,
  .class-options:focus {
    outline: none;
  }

  .students-options:hover,
  .class-options:hover {
    background-color: rgba(169, 169, 169, 0.164);
  }

  .buttons {
    margin-bottom: 7px;
  }


  .textbox {
    top: -9;
  }

  textarea {
    border: unset;
    border-bottom: solid 1pt rgba(0, 0, 0, 0.63);
    background-color: rgba(128, 128, 128, 0.055);
    min-height: 150px;
    padding: 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    min-width: 100%;
  }

  textarea:hover {
    background-color: rgba(169, 169, 169, 0.384);
  }

  textarea:focus {
    outline: none;
  }

  .form-footer {
    justify-content: space-between;
    text-align: center;
    margin-top: 10px;
  }

  .attach-button {
    border-radius: 4px;
    text-align: center;
    color: #1b68d2;
  }

  .posts * {
    margin: 2px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.432);
    font-weight: bold;
    font-size: 15px;
    border: unset;
    padding: 7px 20px;
  }

  .posts button:nth-child(2) {
    background-color: rgba(169, 169, 169, 0.164);
  }

  .posts button:nth-child(1):hover {
    background-color: rgba(169, 169, 169, 0.164);
  }
</style>
