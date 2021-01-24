<script>
  import { createEventDispatcher } from "svelte";
  import { clickOutside, isOdd } from "../../../src/utils/utils";
  import {
    classes,
    archive,
    review,
    settings,
    calendar,
  } from "../../utils/image-constants";
  import Icon from "../Icon.svelte";

  export let openMenu;

  let deadLink = "https/dead";
  let tabOptions = [
    { icon: classes, name: "Classes", link: "/home" },
    { icon: calendar, name: "Calendar", link: deadLink },
    { icon: review, name: "To review", link: deadLink },
    { icon: archive, name: "Archived classes", link: "/home" },
    { icon: settings, name: "Settings", link: deadLink },
  ];
  let dispatch = createEventDispatcher();

  const opener = () => {
    let el = document.getElementById("mySidenav");
    el.style.display = "block";
    el.style.width = "267px";
  };

  const resetMenu = () => {
    let el = document.getElementById("mySidenav");
    el.style.transition = "all 0.5s";
    el.style.width = "0px";
    dispatch("sidenavclosed");
  };

  function handleClickOutside() {
    let el = document.getElementById("mySidenav");
    if (openMenu && el.style.width !== "0%") {
      resetMenu();
    }
  }
</script>

<div
  id="mySidenav"
  class="sidenav roboto"
  use:clickOutside
  on:click_outside={handleClickOutside}
>
  {#each tabOptions as { icon, name, link }, i}
    <div class="{isOdd(i) ? 'flex-r link1' : 'flex-r'} menu-container">
      <div class={i == 0 ? "selected" : "side-menu"}>
        <a href={link} on:click={() => resetMenu()} class="flex-r">
          <Icon name={icon} />
          <span class="open-sans side-menu-icon">
            {name}
          </span>
        </a>
      </div>
    </div>
  {/each}
  {#if openMenu}
    <span style="display:none">{opener()}</span>
  {/if}
</div>

<style>
  .sidenav {
    height: 100%;
    width: 0px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ffffff;
    overflow-x: hidden;
    padding-top: 20px;
    transition: width 0.5s ease-in-out;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.212);
  }
  .link1 {
    border-bottom: #e0e0e0 1px solid;
  }

  .menu-container {
    padding-right: 10px;
  }
  .sidenav a {
    padding: 10px 10px 10px 5px;
    text-decoration: none;
    font-size: 12px;
    display: flex;
    transition: 0.3s;
    align-items: center;
    height: 50px;
  }

  .side-menu {
    width: 100%;
    padding: 5px;
  }
  .side-menu-icon {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #3c4043;
    white-space: nowrap;
  }

  .side-menu:hover {
    background-color: #eeeeee81;
    border-top-right-radius: 50% 150px;
    border-bottom-right-radius: 50% 150px;
  }

  .selected {
    width: 100%;
    padding: 5px;
    background-color: #e5edfc;
    border-top-right-radius: 50% 150px;
    border-bottom-right-radius: 50% 150px;
  }
</style>
