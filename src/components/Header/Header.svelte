<script>
  import Nav from "./Nav.svelte"
  import SideNav from "./SideNav.svelte"
  let opener;
  const toggleSider = () => {
    console.log('time to toggle')
    opener = true
  }
</script>


<Nav on:sider={() => toggleSider()} />
<SideNav openSider={opener} />