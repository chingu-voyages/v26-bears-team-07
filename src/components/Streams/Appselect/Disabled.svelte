<script>
  import { teacher, unmark, arrow_down } from "../../../utils/image-constants";

  export let className;
</script>

<main>
  <button class="selected flex-c" disabled>
    <div class="flex-r case">
      <span>{className || "Test"}</span>
      <img src={arrow_down} alt="selected" />
    </div>
  </button>
</main>

<style>
  .selected {
    padding: 10px;
    background-color:rgba(128, 128, 128, 0.055);
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
  }

  .selected:hover {
    background-color: rgba(169, 169, 169, 0.384);
  }

  span {
    color: rgba(0, 0, 0, 0.753);
  }
</style>
