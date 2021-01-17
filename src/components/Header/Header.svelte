<script>
    import Nav from "./Nav.svelte"
    import SideNav from "./SideNav.svelte"
    let open;

    function openMenu(){
      console.log('time to open menu')
      open = true
    }

    function closeMenu(){
      console.log('time to close menu')
      open = false
    }
  </script>
  
  
  <Nav on:opensidenav={() => openMenu()}/>
  <SideNav openMenu={open} on:sidenavclosed={() => closeMenu()} />