<!-- _FadeDecorator.svelte -->
<script>
  import { BaseTransition } from "@roxi/routify/decorators";
  import { fade } from "svelte/transition";

  const configs = [
    {
      condition: (meta) => true,
      transition: fade,
      inParams: { duration: 200 },
      outParams: { duration: 0 },
    },
  ];
</script>

<BaseTransition {configs}>
  <slot />
</BaseTransition>
