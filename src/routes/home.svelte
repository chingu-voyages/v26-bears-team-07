<script>
  let createOpen = false;
</script>

<h1>Classroom</h1>
<button on:click={() => (createOpen = true)}>Create class</button>

{#if createOpen}
  <form on:submit|preventDefault>
    <h2>Create class</h2>
    <input type="text" placeholder="Class name (required)" required />
    <input type="text" placeholder="Section" />
    <input type="text" placeholder="Subject" />
    <input type="text" placeholder="Room" />

    <button type="submit">Create</button>
  </form>
{/if}
