<script>
  import Nav from "./Nav.svelte";
  import SideNav from "./SideNav.svelte";
  let open;
  export let userID;

  const openMenu = () => (open = true);
  const closeMenu = () => (open = false);
</script>

<Nav on:opensidenav={openMenu} />
<SideNav {open} on:sidenavclosed={closeMenu} userId={userID} />
