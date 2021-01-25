<script>
  export let name;
  // export let styles;

  function getAlt(name) {
    return name.split("/")[1];
  }
</script>

<img alt={getAlt(name)} src={name} on:click/>

<style>
  img {
    margin: 0 10px;
    width: 30px;
    font-weight: bolder;
    cursor: pointer;
    padding: 5px;
    margin-right: 20px;
    color: r#3c4043;
  }

  img:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 50%;
  }
</style>
