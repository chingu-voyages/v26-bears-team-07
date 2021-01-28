<script>
  import { createEventDispatcher } from "svelte";
  import TabItem from "./TabItem.svelte";
  import NewClass from "./NewClass.svelte";
  import { hamburger, plus } from "../../utils/image-constants";
  import { isActive, params } from "@roxi/routify";
  import UserMenu from "./UserMenu.svelte";
  import ClassLogo from "./ClassLogo.svelte";
  export let className = "Bear Class";
  export let role = "student";
  let showNewClass = false;
  let dispatch = createEventDispatcher();
  function openSideNav() {
    dispatch("opensidenav");
  }
  let userMenuOpen = false;
</script>

<nav class="global-nav flex-r">
  <div class="left-content">
    <button class="class-burger" tabindex="0" on:click={openSideNav}>
      <img alt="class-menu" src={hamburger} />
    </button>
    <div class="nav-title">
      {#if $isActive("/invite")}
        <span>Join your class</span>
      {:else if $params?.classID}
        <ClassLogo />
      {:else}
        <span>{className}</span>
      {/if}
    </div>
  </div>
  {#if role && $params.classID && !$isActive("./invite")}
    <div class="center-content">
      <ul class="nav-tabs">
        <TabItem active={$isActive("/stream")} href="/stream/{$params.classID}"
          >Stream</TabItem
        >
        <TabItem
          active={$isActive("/classwork")}
          href="/classwork/{$params.classID}"
        >Classwork</TabItem
        >
        <TabItem active={$isActive("/people")} href="/people/{$params.classID}"
          >People</TabItem
        >
        {#if role === "teacher"}
          <TabItem
            active={$isActive("/grades")}
            href="/grades/{$params.classID}"
          >Grades</TabItem
          >
        {/if}
      </ul>
    </div>
  {/if}
  <ul class="flex-r">
    <li class="plus" on:click={() => (showNewClass = true)}>
      <img alt="add-class" src={plus} />
    </li>
    <li class="user" on:click={() => (userMenuOpen = !userMenuOpen)}>
      <span class="avatar"
        ><img src="https://placekitten.com/50/50" alt="kitten avatar" /></span
      >
    </li>
  </ul>
</nav>
<UserMenu
  open={userMenuOpen}
  on:click_outside={() => setTimeout(() => (userMenuOpen = false))}
/>

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
    height: 100%;
    padding: 5px;
    text-decoration: none;
    margin: 5px 15px 5px 5px;
    border: none;
    display: grid;
    place-items: center;
  }
  .class-burger img {
    margin: 0;
    width: 30px;
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
    width: 60px;
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
    overflow: hidden;
  }
  .nav-title {
    font-size: 1.4rem;
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
