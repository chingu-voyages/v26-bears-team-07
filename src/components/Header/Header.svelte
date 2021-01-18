<script>
    import Nav from "./Nav.svelte"
    import SideNav from "./SideNav.svelte"
    let open;

    const openMenu = () => open = true;
    const closeMenu = () => open = false;
  </script>
  
  
  <Nav on:opensidenav={() => openMenu()}/>
  <SideNav openMenu={open} on:sidenavclosed={() => closeMenu()} />