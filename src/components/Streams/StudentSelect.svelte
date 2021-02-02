<!-- @component
  Bindings to monitor: `tickAllStudents` & `selected`
  @prop `tickAllStudents` {Boolean} If all students are selected.
  @prop `selected` {Array} Selected IDs.
  If `tickAllStudents` is true, `selected` is unnecessary.
 -->
<script>
  import { fly, fade } from "svelte/transition";
  import { clickOutside, sleep } from "../../utils/utils";

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

  // prevent visible bugs during transition in
  let handleClickOutside = null;
  let hover = false;
  let handleSelect = handleOpen;
  function handleClose() {
    // reset states
    handleClickOutside = null;
    hover = false;
    open = false;
    handleSelect = handleOpen;
  }
  async function handleOpen() {
    // mount open
    open = true;
    await sleep(300);
    handleSelect = handleClose;
    handleClickOutside = handleClose;
    hover = true;
  }
</script>

<select
  on:mousedown|preventDefault={handleSelect}
  on:keydown|preventDefault={!open && handleSelect}
  name="students"
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
    on:click_outside={handleClickOutside}
  >
    <ul class:hover>
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
            name={_id}
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
  ul {
    padding: 0.5rem 0;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.141), 0 1px 3px 0 rgba(0, 0, 0, 0.122);
    border-radius: 4px;
    position: absolute;
    top: -2rem;
    left: 0.1rem;
    max-width: 280px;
    background: #fff;
  }
  li {
    list-style: none;
    display: flex;
    place-items: center;
    padding: 0.5rem 1rem;
  }
  .hover li:hover,
  .hover li:focus {
    transition: background-color ease 0.2s;
    background-color: #eee;
    outline: 1px solid transparent;
  }
  input[type="checkbox"] {
    transform: scale(1.25);
    margin-right: 1rem;
  }
  label {
    white-space: nowrap;
    font-size: 0.9rem;
  }
  li,
  input,
  label,
  select {
    cursor: pointer;
  }

  select {
    padding: 10px 22px;
    border: unset;
    color: rgba(0, 0, 0, 0.678);
    border-radius: 3px;
  }

  select:focus {
    outline: none;
    background-color: rgba(169, 169, 169, 0.164);
  }

  select:hover {
    background-color: rgba(169, 169, 169, 0.164);
  }
</style>
