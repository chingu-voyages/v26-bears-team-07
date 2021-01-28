<script>
  import { params } from "@roxi/routify";
  import { goto } from "@roxi/routify/runtime/helpers";
  import { authStore } from "../../stores/auth";
  import { usersByClassID, useJoinClass } from "../../stores/query";

  // redirect to login with params if not logged in
  if (!$authStore?.id)
    location.href = `${location.origin}/signin?classID=${$params?.classID}&cjc=${$params?.cjc}`;

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
  <div class="box center">
    <div class="top center">
      <h2>Bear Class</h2>
      <p>Class helps classes communicate, save time, and stay organized.</p>
    </div>
    <div class="bottom center">
      <p>You are joining this class as a student.</p>
      <button
        on:click={async () => {
          joinClass({ userID: $authStore.id, classID });
        }}>Join Class</button
      >
    </div>
  </div>
{:else if !$classData.fetching}
  <h2>Class not found</h2>
  <p>Look for it on classes or double-check your link</p>
{/if}

<style>
  .center {
    display: grid;
    place-items: center;
  }
  .box {
    margin: 0 auto;
    width: 47.5rem;
    max-width: 93%;
    border: 0.0625rem solid #dadce0;
    border-radius: 0.5rem;
    margin-top: 2rem;
    overflow: hidden;
  }
  p,
  h2 {
    text-align: center;
    width: 100%;
    max-width: 24rem;
  }
  .top {
    background: #f1f3f4;
    padding: 2rem 0;
    width: 100%;
    min-height: 9rem;
  }
  .top p {
    font-size: 0.9rem;
  }
  .bottom {
    padding: 2rem 0;
    min-height: 10rem;
  }
  .bottom p {
    font-size: 0.8rem;
  }
</style>
