<script>
  import { createEventDispatcher } from "svelte";
  import Select from "../Streams/Appselect/Select.svelte";
  import Disabled from "../Streams/Appselect/Disabled.svelte";
  // import { bubble } from "svelte/internal";
  import { attach } from '../../utils/image-constants';

  let selected;
  let options = "All Students";
  let dispatch = createEventDispatcher();

  function closeAnnoucement(){
    console.log('to close announcement');
    dispatch('closeAddAnouncement')
  }
</script>

<main class="flex-c class-shadow">
  <h3 class="open-sans">For</h3>
  <div class="flex-r buttons">
    <div><Disabled /></div>
    <div><Select /></div>
  </div>
  <div class="textbox">
    <textarea />
    <div class="false-text-area" contenteditable>
      <span class="roboto headline">Announce something to your class</span>
    </div>
  </div>
  <div class="flex-r form-footer">
    <button class="flex-r attach-button" >
      <!-- <img src={attach} alt="attach-docs" class="attachment" /> -->
      <span>Add</span>
    </button>
    <div class="flex-r posts open-sans">
      <button type="reset" value="reset" on:click={closeAnnoucement}>Cancel</button>
      <button disabled>Post</button>
    </div>
  </div>
</main>

<style>
  main {
    padding: 30px;
    border-radius: 5px;
  }

  h3 {
    margin-bottom: 10x;
    filter: opacity(70%);
  }

  .buttons {
    margin-bottom: 7px;
  }

  .buttons * {
    margin: 4px;
  }

  .textbox {
    top: -9;
  }

  textarea {
    display: none;
    border: unset;
    background-color: rgba(128, 128, 128, 0.055);
    border-bottom: solid 1pt rgba(0, 0, 0, 0.63);
  }

  textarea:hover {
    background-color: rgba(169, 169, 169, 0.384);
  }

  .false-text-area {
    border-bottom: solid 1pt rgba(0, 0, 0, 0.63);
    background-color: rgba(128, 128, 128, 0.055);
    min-height: 150px;
    padding: 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .false-text-area:hover {
    background-color: rgba(169, 169, 169, 0.164);
  }

  .false-text-area:focus {
    outline: none;
  }

  .headline {
    /* color: #1867D3; */
    font-size: 14px;
  }

  .form-footer{
    justify-content: space-between;
    text-align: center;
    margin-top: 10px;
  }

  /* .attachment{
    width: 20px;
    height: 15px;
  } */

  .attach-button{
    
    /* padding: 5px; */
    border-radius: 4px;
    text-align: center;
    color: #1B68D2;
  }

  .posts *{
    margin: 2px;
    border-radius: 4px;
    color:rgba(0, 0, 0, 0.432);
    font-weight: bold;
    font-size: 15px;
    border: unset;
    padding: 7px 20px;
  }

  .posts button:nth-child(2){
    background-color: rgba(169, 169, 169, 0.164);
  }

  .posts button:nth-child(1):hover{
    background-color: rgba(169, 169, 169, 0.164);
  }
</style>
