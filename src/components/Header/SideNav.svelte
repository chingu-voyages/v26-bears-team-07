<script>
    import { createEventDispatcher } from "svelte";
    import { clickOutside } from "../../../src/utils/utils";
    
    let deadLink = "https/dead";
    let entry = "test";
    let dispatch = createEventDispatcher();
    export let openMenu;

    const opener = () => {
      let el = document.getElementById("mySidenav");
      el.style.display = "block";
      el.style.width = '18%';
    }

    const resetMenu = () => {
      let el = document.getElementById("mySidenav")
      el.style.transition = 'all 0.5s';
      el.style.width = '0';
      dispatch('sidenavclosed');
    }

 

    function handleClickOutside(){
      let el = document.getElementById("mySidenav");
      if(openMenu && el.style.width !== '0'){
        resetMenu();
      }   
    }
    
  </script>
  
  
  <style>
  .sidenav {
    height: 100%; 
    width: 0; 
    position: fixed; 
    z-index: 1; 
    top: 0; 
    left: 0;
    background-color: black;
    border: rgba(128, 128, 128, 0.432) 1px solid; 
    overflow-x: hidden; 
    padding-top: 60px; 
    transition: width 0.5s ease-in-out; 
  }
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  .sidenav a:hover {
    color: #f1f1f1;
  }
  </style>
  
  <div id="mySidenav" class="sidenav" use:clickOutside on:click_outside={handleClickOutside}>
    <a href={deadLink}>{entry}</a>
    <a href={deadLink}>{entry}</a>
    <a href={deadLink}>{entry}</a>
    <a href={deadLink}>{entry}</a>
    {#if openMenu}
    <span style="display:none">{opener()}</span>
    {/if}
  </div>
  
