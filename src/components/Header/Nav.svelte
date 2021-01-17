<script>
  import { createEventDispatcher } from "svelte";
  import TabItem from "./TabItem.svelte";
  import NewClass from "./NewClass.svelte";
  let hamburgers = "images/align-justify.svg",
    plus = "images/plus.svg";
  export let className = "AppName";
  export let role = "student";

  let showNewClass = false;
  let dispatch = createEventDispatcher()

  function openSideNav(){
    console.log('send action to open menu to sidenav')
    dispatch('opensidenav')
  }
</script>

<nav class="global-nav flex-r">
  <div class="left-content">
    <div class="class-burger" tabindex="0">
      <img alt="class-menu" src={hamburgers} on:click={() => openSideNav()} />
    </div>
    <div class="nav-title">
      <span>{className}</span>
    </div>
  </div>
  {#if role}
    <div class="center-content">
      <ul class="nav-tabs">
        <TabItem active={true}>Stream</TabItem>
        <TabItem active={false}>Classwork</TabItem>
        <TabItem active={false}>People</TabItem>
        {#if role === "teacher"}
          <TabItem active={false}>Grades</TabItem>
        {/if}
      </ul>
    </div>
  {/if}
  <ul class="flex-r">
    <li class="plus" on:click={() => (showNewClass = true)}>
      <img alt="add-class" src={plus} />
    </li>
    <li class="user"><span class="avatar" /></li>
  </ul>
</nav>

{#if showNewClass}
  <NewClass on:cancel={() => (showNewClass = false)} />
{/if}

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .global-nav {
    justify-content: space-between;
    align-items: center;
    border-bottom: rgba(128, 128, 128, 0.432) 1px solid;
    padding: unset;
    flex-wrap: wrap;
  }

  .global-nav ul {
    align-items: center;
    margin-right: 4px;
    margin: unset;
  }

  .global-nav li {
    list-style: none;
    margin-left: 15px;
  }

  .left-content {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .class-burger {
    /* width: 100%; */
    height: 100%;
    padding: 0;
    text-decoration: none;
    margin: unset;
  }

  .class-burger img {
    margin: 0 10px;
    /* width: 2vw; */
  }

  .center-content {
    height: 68px;
  }

  .nav-tabs {
    display: flex;
    padding: none;
    justify-content: center;
    height: 100%;
  }

  .plus img {
    cursor: pointer;
    padding: 10px;
    margin-right: 20px;
    border-radius: 50%;
  }

  .plus img:hover {
    background-color: rgb(245, 245, 245);
  }

  .avatar {
    background-color: silver;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: inline-block;
    margin: 10px 15px;
  }

  @media (max-width: 800px) {
    .center-content {
      display: flex;
      order: 3;
      width: 100%;
      justify-content: center;
    }
  }
</style>
