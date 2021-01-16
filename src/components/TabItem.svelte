<script>
  export let active = false;
</script>

<li class="tab-item">
  <a href="/" on:click class:active><slot /></a>
</li>

<style>
  li {
    list-style: none;
  }
  .active {
    color: rgb(25, 103, 210);
    border-bottom: 5px solid rgb(25, 103, 210);
  }

  .active:hover {
    background-color: rgba(25, 103, 210, 0.04);
  }

  .tab-item {
    height: 100%;
  }

  a {
    display: block;
    height: 100%;
    margin: 0;
    padding: 26px 10px;
  }

  a:hover {
    background-color: rgba(238, 238, 238, 0.514);
  }
  @media (max-width: 800px) {
    .tab-item a {
      padding: 30px 10px;
    }
  }
</style>
