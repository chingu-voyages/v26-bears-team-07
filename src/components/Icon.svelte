<script>
  export let name;
  // export let styles;

  function getAlt(name) {
    return name.split("/")[1];
  }
</script>

<div>
  <img alt={getAlt(name)} src={name} on:click />
</div>

<style>
  img {
    width: 20px;
    font-weight: bolder;
    cursor: pointer;
    color: #3c4043;
  }

  div {
    margin: 0 10px;
    margin-right: 20px;
    padding: 5px;
  }

  div:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 50%;
  }
</style>
