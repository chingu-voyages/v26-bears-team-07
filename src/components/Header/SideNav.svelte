<script>
  import { createEventDispatcher } from "svelte";
  import { url } from "@roxi/routify";
  import { clickOutside, isOdd } from "../../../src/utils/utils";
  import { classesByUserID } from "../../stores/query";
  import {
    classes,
    archive,
    settings,
    calendar,
  } from "../../utils/image-constants";
  import Icon from "../Icon.svelte";
  import InnerSideNav from "./InnerSideNav.svelte";


  export let open = false;

  let deadLink = "https/dead";
  let tabOptions = [
    { icon: classes, name: "Classes", link: "/home" },
    { icon: calendar, name: "Calendar", link: "/calendar" },
    { icon: archive, name: "Archived classes", link: "/home" },
    { icon: settings, name: "Settings", link: deadLink },
  ];
  let dispatch = createEventDispatcher();
  let userClasses;
  export let userId = undefined;
  const handleClose = () => dispatch("sidenavclosed");

  userClasses =  classesByUserID({ id: userId })

  $: allClasses = userClasses && $userClasses.data
    ? (() =>
        $userClasses.data.result.teaches.data.map((val) => {
          let classObj = Object.create(null);
          classObj.icon = null;
          classObj.name = val.name;
          classObj.link = $url("./stream/:classID", { classID: val._id });
          return classObj;
        }))()
    : [];
</script>

<div
  class:open
  class="sidenav roboto"
  use:clickOutside
  on:click_outside={handleClose}
>
  {#each tabOptions as { icon, name, link }, i}
    {#if allClasses && i === 2}
      <InnerSideNav toClose={handleClose} userClasses={allClasses} />
    {/if}
    <div class="{isOdd(i) ? 'flex-r link1' : 'flex-r'} menu-container">
      <div class={i == 0 ? "selected" : "side-menu"}>
        <a href={link} on:click={handleClose} class="flex-r">
          <Icon name={icon} />
          <span class="open-sans side-menu-icon">
            {name}
          </span>
        </a>
      </div>
    </div>
  {/each}
</div>

<style>
  .sidenav {
    height: 100%;
    width: 0px;
    position: fixed;
    z-index: 5;
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
  .open {
    display: block;
    width: 267px;
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
