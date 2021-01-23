import { onMount, tick } from "svelte";
import { get, writable } from "svelte/store";

/** Redirect if at a path that requires login and user is not logged in. */
function checkPaths(arr) {
  var curPath = location.pathname;
  if (!arr.filter((v) => v == curPath).length) location.pathname = `/signin`;
}

/** Initializes with auth details. Redirect check is only performed once for the app's init. */
export const authStore = writable(
  JSON.parse(localStorage.getItem("auth")) ||
    checkPaths(["/signin", "/signup", "/"])
);

/** Initializes secret into store if logged in.
 * - Used in our global `_layout.svelte`
 */
export function init() {
  onMount(() => {
    let authData = JSON.parse(localStorage.getItem("auth"));
    if (authData) {
      authStore.set(authData);
    }
  });
}

/** TODO: Use this later to redirect from pages that require a user to be logged in
 * Currently unused. Doesn't do any checks or conditional logic, but may implement that later.
 */
export function redirect() {
  onMount(async () => {
    await tick();
    // TODO: Figure out if you can use GOTO from routify instead of native browser redirect API
    if (!get(authStore)) location.pathname = "/signin";
  });
}
