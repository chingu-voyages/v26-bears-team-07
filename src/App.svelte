<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import initClient from "./utils/client";
  import { authStore } from "./stores/auth";

  $authStore?.secret && initClient($authStore.secret);
</script>

<Router {routes} />

<style global>
  @import "../assets/global.css";
</style>
