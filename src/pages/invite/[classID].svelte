<script>
  import { params } from "@roxi/routify";
  import { goto } from "@roxi/routify/runtime/helpers";
  import { authStore } from "../../stores/auth";
  import { usersByClassID, useJoinClass } from "../../stores/query";

  const { classID, cjc } = $params;
  let classData = usersByClassID({ classID: classID });

  function validateInvite(data) {
    if (!data) return data;
    const { _id, invite } = data;
    const isJoined = checkAlreadyJoined(data);
    return !isJoined && _id == classID && cjc == invite;
  }
  $: isValid = validateInvite($classData?.data?.result);

  function checkAlreadyJoined(data) {
    const { teachers, students } = data;
    const people = [...teachers.data, ...students.data];
    const isJoined = people.some(({ _id }) => _id == $authStore.id);
    return isJoined ? $goto(`/stream/${classID}`) : false;
  }

  const [joinClass, joinStore] = useJoinClass();
  $: if ($joinStore.data) $goto(`/stream/${classID}`);
</script>

{#if isValid}
  <button
    on:click={async () => {
      joinClass({ userID: $authStore.id, classID });
    }}>Join Class</button
  >
{:else if !$classData.fetching}
  <h2>Invalid invite or not logged in.</h2>
{/if}
