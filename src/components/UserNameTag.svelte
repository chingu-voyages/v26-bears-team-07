<script>
  export let className;
  $: firstLetter = className[0].toUpperCase();
</script>

<div class="outer">
  <div class={"inner flex-c "}>
    <span class={"open-sans"}>{firstLetter}</span>
  </div>
</div>

<style>
  .outer {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 1px;
    margin: 0 10px;
    margin-right: 15px;
  }

  .inner {
    background-color: #004da5;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  span {
    color: white;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
</style>
