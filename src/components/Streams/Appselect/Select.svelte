<script>
  import { teacher, unmark, arrow_down } from "../../../utils/image-constants";

  let options = ["All students"];
  let defaults = "All Students";
  let value = defaults;
  let visibleState = "hidden";
</script>

<form>
  <button
    class="selected flex-c"
    {value}
    default={options[0]}
    type="submit"
    form="form1"
    on:click={() => (visibleState = "visible")}>
    <div class="flex-r case">
      <span>{value || defaults}</span>
      <img src={arrow_down} alt="selected" />
    </div>
  </button>
  <div class="flex-c options-container" style="visibility: {visibleState}">
    {#each options as option}
      <button
        on:click={(e) => (value = e.target.children[2].innerText)}
        type="button">
        <div class="flex-r button-content">
          <img src={unmark} alt="unmark" />
          <img src={teacher} alt="users" />
          <span class="open-sans">{option}</span>
        </div>
      </button>
    {/each}
  </div>
</form>

<style>
  .selected {
    padding: 10px;
    background-color: rgba(128, 128, 128, 0.055);
    border: unset;
    border-radius: 4px;
    min-width: 150px;
  }

  .case {
    text-align: center;
    justify-content: space-between;
    width: 100%;
  }

  .case * {
    margin: 4px;
  }

  .selected img {
    width: 25px;
    height: 25px;
    filter: opacity(65%);
  }

  .selected:hover {
    background-color: rgba(169, 169, 169, 0.384);
  }

  .options-container {
    width: 250px;
  }

  .options-container button {
    padding: 7px 5px;
    border: unset;
    box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 21%);
    border-radius: 5px;
    /* width: 100%; */
  }

  .button-content :nth-child(1) {
    width: 15px;
  }

  .button-content :nth-child(2) {
    width: 45px;
  }

  .button-content {
    align-items: center;
  }

  .button-content * {
    margin: 7px;
  }

  .button-content:hover {
    background-color: rgba(169, 169, 169, 0.164);
  }

  span {
    color: rgba(0, 0, 0, 0.753);
  }
</style>
