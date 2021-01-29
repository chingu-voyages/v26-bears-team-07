<!-- @component
  Bindings to monitor: `tickAllStudents` & `selected`
  @prop `tickAllStudents` {Boolean} If all students are selected.
  @prop `selected` {Array} Selected IDs.
  If `tickAllStudents` is true, `selected` is unnecessary.
 -->
<script>
  import { fly, fade } from "svelte/transition";
  import { clickOutside } from "../../utils/utils";

  export let disabled = false;
  export let optionsData = [];
  export let tickAllStudents = true; // bind
  export let selected = []; // bind

  let options = [];
  let allOptionIDs = [];
  let open;

  $: if (optionsData.length) {
    init();
  }
  $: if (tickAllStudents == true) {
    selected = [...allOptionIDs];
  } else if (tickAllStudents == false) {
    selected = [];
  }
  $: if (selected.length == options.length) {
    tickAll();
  } else if (selected.length < options.length) {
    tickAll(false);
  }

  function tickAll(bool = true) {
    tickAllStudents = bool;
  }
  function init() {
    options = optionsData.map(({ name, _id }) => ({
      name,
      _id,
    }));
    allOptionIDs = options.map(({ _id }) => _id);
    selected = [...allOptionIDs];
  }
  function handleOpen() {
    open = !open;
    skipCount = 0;
  }
  let skipCount = 0;
</script>

<select
  on:mousedown|preventDefault={handleOpen}
  on:keydown|preventDefault={handleOpen}
  name="students"
  class="students-options"
  {disabled}
>
  <option
    >{tickAllStudents == true
      ? "All students"
      : selected.length == 1
      ? "1 student"
      : `${selected.length} students`}</option
  >
</select>

{#if open}
  <div
    class="box"
    in:fly={{ y: -80, duration: 300 }}
    out:fade={{ duration: 200 }}
    use:clickOutside
    on:click_outside={() => {
      // skip one because bug where event happens even though it just opened
      if (skipCount > 0) {
        open = false;
      }
      skipCount++;
    }}
  >
    <ul class="menu">
      <li>
        <input
          type="checkbox"
          id="all"
          bind:checked={tickAllStudents}
          disabled={options.length <= 1}
        />
        <label for="all"> All students </label>
      </li>
      {#each options as { name, _id }}
        <li>
          <input
            type="checkbox"
            id={_id}
            bind:group={selected}
            value={_id}
            disabled={options.length <= 1}
          />
          <label for={_id}>
            {name}
          </label>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .box {
    position: absolute;
  }
  .menu {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.141), 0 1px 3px 0 rgba(0, 0, 0, 0.122);
    border-radius: 4px;
    position: absolute;
    top: -2rem;
    left: 0rem;
    max-width: 280px;
    background: #fff;
  }
  ul {
    padding: 0;
  }
  li {
    margin: 0 1rem;
    list-style: none;
    display: flex;
    place-items: center;
  }
  input {
    margin-right: 0.5rem;
  }
  label {
    white-space: nowrap;
  }

  .students-options {
    padding: 10px 22px;
    border: unset;
    color: rgba(0, 0, 0, 0.678);
    border-radius: 3px;
  }

  .students-options:focus {
    outline: none;
    background-color: rgba(169, 169, 169, 0.164);
  }

  .students-options:hover {
    background-color: rgba(169, 169, 169, 0.164);
  }
</style>
