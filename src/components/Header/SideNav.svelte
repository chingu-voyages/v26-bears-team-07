<script>
    import { createEventDispatcher } from "svelte";
    import { clickOutside, isOdd } from "../../../src/utils/utils";
    import { classes, archive, review, settings, calendar } from "../../utils/image-constants";
    import Icon from "../Icon.svelte";
    
    export let openMenu;



    let deadLink = "https/dead";
    let dispatch = createEventDispatcher();
    let tabOptions = [classes,calendar,review,archive,settings];
    let tabOptionsString = ['Classes', 'Calendar', 'To review','Archived classes','settings'];
    

    const opener = () => {
      let el = document.getElementById("mySidenav");
      el.style.display = "block";
      el.style.width = '267px';
    }

    const resetMenu = () => {
      let el = document.getElementById("mySidenav")
      el.style.transition = 'all 0.5s';
      el.style.width = '0px';
      dispatch('sidenavclosed');
    }

 

    function handleClickOutside(){
      let el = document.getElementById("mySidenav");
      if(openMenu && el.style.width !== '0%'){
        resetMenu();
      }   
    } 
  </script>
  

  
  <div id="mySidenav" class="sidenav roboto" use:clickOutside on:click_outside={handleClickOutside}>
    {#each tabOptions as option, i}
      <a href={deadLink} class="{isOdd(i) ? 'flex-r link1' : 'flex-r'}">
        <Icon name = {option} />
        <span class="roboto theme-font side-menu">{tabOptionsString[i]}</span>
      </a>
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
      background-color: #FFFFFF;
      overflow-x: hidden; 
      padding-top: 20px; 
      transition: width 0.5s ease-in-out; 
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.212);
    }
    .link1{
      border-bottom: #E0E0E0 1px solid;
    }
    .sidenav a {
      padding: 10px 10px 10px 5px;
      text-decoration: none;
      font-size: 12px;
      display: flex;
      transition: 0.3s;
      align-items: center;

    }

    .side-menu{
      font-weight: 700;
    }
    </style>
