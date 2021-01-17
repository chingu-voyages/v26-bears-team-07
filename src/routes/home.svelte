<script>
  import { authStore } from "../stores/auth";
  import { createClass } from "../utils/class";
  let createOpen = false;
  let name, section, subject, room;
</script>

<h1>Classroom</h1>
<button on:click={() => (createOpen = true)}>Create class</button>

{#if createOpen}
  <form
    on:submit|preventDefault={async () =>
      await createClass($authStore.secret, {
        name,
        id: $authStore.id,
        section,
        subject,
        room,
      })}
  >
    <h2>Create class</h2>
    <input
      type="text"
      bind:value={name}
      placeholder="Class name (required)"
      required
    />
    <input type="text" bind:value={section} placeholder="Section" />
    <input type="text" bind:value={subject} placeholder="Subject" />
    <input type="text" bind:value={room} placeholder="Room" />

    <button type="submit">Create</button>
  </form>
{/if}
