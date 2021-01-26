<script>
  import Card from "./Card.svelte";
  export let classes = [
    {
      name: "test",
      text: ["assignment 1", "assignment 2"],
    },
    {
      name: "test 2",
      text: ["assignment 1", "assignment 2"],
    },
    {
      name: "test 3",
      text: ["assignment 1", "assignment 2"],
    },
    {
      name: "test 4",
      text: ["assignment 1", "assignment 2"],
    },
    {
      name: "test 5",
      text: ["assignment 1", "assignment 2"],
    },
    {
      name: "test 6",
      text: ["assignment 1", "assignment 2"],
    },
    {
      name: "test 7",
      text: ["assignment 1", "assignment 2"],
    },
    {
      name: "test 8",
      text: ["assignment 1", "assignment 2"],
    },
    {
      name: "test 9",
      text: ["assignment 1", "assignment 2"],
    },
  ];
</script>

<div class="container">
  {#each classes as classData}
    <div class="item">
      <Card type="classDetail" title={classData.name} text={classData.text} />
    </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    flex-basis: 300px;
  }
</style>
