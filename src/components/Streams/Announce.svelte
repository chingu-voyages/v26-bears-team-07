<script>
  import { params } from "@roxi/routify";
  import { createEventDispatcher } from "svelte";
  import { authStore } from "../../stores/auth";
  import { useCreateStream, usersByClassID } from "../../stores/query";
  import StudentSelect from "./StudentSelect.svelte";

  export let className;
  let dispatch = createEventDispatcher();
  let message;

  const [announce] = useCreateStream(); // can get second return val if need to check msg send fetching state

  function closeAnnoucement() {
    dispatch("closeAddAnouncement");
  }

  //append students list from database
  const users = usersByClassID({ classID: $params.classID });
  let options = [];
  $: if ($users.data) options = [...$users.data.result.students.data];
</script>

<form
  class="flex-c class-shadow"
  on:submit|preventDefault={() => {
    announce({ userID: $authStore.id, classID: $params.classID, message });
    closeAnnoucement();
  }}
>
  <h3 class="open-sans">For</h3>
  <div class="flex-r buttons">
    <div>
      <select name="test" class="class-options" disabled>
        <option value={className || "Test"}>{className || "Test"}</option>
      </select>
    </div>
    <div>
      <StudentSelect optionsData={options} />
    </div>
  </div>
  <div class="textbox">
    <textarea bind:value={message} />
  </div>
  <div class="flex-r form-footer">
    <button class="flex-r attach-button">
      <span>Add</span>
    </button>
    <div class="flex-r posts open-sans">
      <button type="reset" value="reset" on:click={closeAnnoucement}
        >Cancel</button
      >
      <input type="submit" value="Post" />
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

  .class-options:focus {
    outline: none;
    background-color: rgba(169, 169, 169, 0.164);
  }

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

  .posts input[type="submit"] {
    background-color: rgba(169, 169, 169, 0.164);
  }

  .posts button:nth-child(1):hover {
    background-color: rgba(169, 169, 169, 0.164);
  }
</style>
