<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;
    return { id };
  }
</script>

<script>
  export let id;
</script>

<h1>Hey! {id}</h1>
