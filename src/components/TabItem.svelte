<script>
  export let isActive = false;
</script>

<li class="tab-item">
  <a href="/" on:click id={isActive ? "active" : null}><slot /></a>
</li>

<style>
  li {
    list-style: none;
  }
  #active {
    color: #1967d2;
    border-bottom: 5px solid #1967d2;
  }

  .tab-item {
    height: 100%;
  }

  .tab-item a {
    display: block;
    height: 100%;
    margin: 0;
    padding: 26px 10px;
    border-bottom: 5px solid white;
  }

  .tab-item a:hover {
    background-color: #eee;
    border-bottom: 5px solid #eee;
  }
  @media (max-width: 800px) {
    .tab-item a {
      padding: 30px 10px;
    }
  }
</style>
