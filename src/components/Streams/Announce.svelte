<script>
  import Select from "../Streams/Appselect/Select.svelte";
  import Disabled from "../Streams/Appselect/Disabled.svelte";
  import { bubble } from "svelte/internal";

  let selected;
  let options = "All Students";
</script>

<main class="flex-c class-shadow">
  <h3 class="open-sans">For</h3>
  <div class="flex-r buttons">
    <div><Disabled /></div>
    <div><Select /></div>
  </div>
  <div class="textbox">
    <textarea />
    <div class="false-text-area" />
  </div>
  <div>Submit</div>
</main>

<style>
  main {
    padding: 30px;
    border-radius: 5px;
  }

  h3 {
    margin-bottom: 10x;
  }

  .buttons{
    margin-bottom: 7px;
  }

  .buttons * {
    margin: 4px;
  }

  .textbox{
    top: -9;
  }
   
  textarea{
    display: none;
  }

  .false-text-area {
    border-bottom: solid 1pt rgba(0, 0, 0, 0.63);
    background-color: rgba(128, 128, 128, 0.055);
    min-height: 150px;
  }

  .false-text-area:hover{
    background-color: rgba(169, 169, 169, 0.384);
  }
</style>
