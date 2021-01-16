<script>
  import { clickOutside } from "../../utils/util.js";
  let deadLink = "https/dead"
  let entry = "test"
  export let openSider;

  const opener = () => {
    let el = document.getElementById("mySidenav")
    el.style.display = "block";
    el.style.width = '18%'
  }

  function handleClickOutside(event){
    console.log('click outside action') 
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
  transition: 0.5s; 
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
</div>

<!-- Use any element to open the sidenav -->
{#if openSider}
  {opener()}
{/if}