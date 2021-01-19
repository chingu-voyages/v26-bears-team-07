<script>
  import { onMount, tick } from "svelte";
  import { authStore } from "../stores/auth";
  import { classesByUser, createClass } from "../utils/class";
  let createOpen = false;
  let name, section, subject, room;

  let classes = [];
  onMount(async () => {
    await tick;
    if ($authStore.secret) {
      var res = await classesByUser($authStore.secret, $authStore.id);
      var {
        findUserByID: { teaches, attends },
      } = res;
      classes = [...teaches.data, ...attends.data];
    }
  });
</script>

<h1>Classroom</h1>
<button on:click={() => (createOpen = true)}>Create class</button>

{#if createOpen}
  <form
    on:submit|preventDefault={async () =>
      await createClass($authStore.secret, {
        name,
        ownerID: $authStore.id,
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

{#each classes as { name, _id, invite }}
  <a href="#">
    <h2>{name}</h2>
  </a>
{/each}
