<script>
  import { authStore } from "../../stores/auth";
  import { useCreateComment } from "../../stores/query";
  import { teacher } from "../../utils/image-constants";

  export let username = "Testuser";
  export let dateCreated = "Jan 25"; // date is in format Jan 15
  export let _id = undefined;

  let message;
  const [createComment] = useCreateComment();
</script>

<main class="flex-c">
  <section class="flex-c">
    <div class="top flex-r">
      <img src={teacher} alt="user" class="user" />
      <div class="flex-c date-tag">
        <span class="open-sans">{username}</span>
        <span class="roboto">{dateCreated}</span>
      </div>
    </div>
    <slot name="classwork" />
  </section>
  <form
    class="bottom flex-r"
    on:submit|preventDefault={() => {
      createComment({ userID: $authStore.id, streamID: _id, message });
    }}
  >
    <div>
      <img src={teacher} alt="user-comment" class="user-comment" />
    </div>
    <div class="input-wrapper">
      <button class="flex-c" type="submit">
        <!-- prettier-ignore -->
        <svg class="send" focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M2 3v18l20-9L2 3zm2 11l9-2-9-2V6.09L17.13 12 4 17.91V14z"></path></svg>
      </button>
      <input
        bind:value={message}
        class="comment-box"
        name="comment"
        type="text"
        autocomplete="off"
        placeholder="Add class comment..."
      />
    </div>
  </form>
  <slot name="comments" />
</main>

<style>
  main {
    margin-top: 20px;
    border: solid 1px rgba(0, 0, 0, 0.089);
    border-radius: 5px;
  }

  .top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.089);
    padding: 10px;
  }

  .user {
    width: 45px;
    margin-right: 10px;
  }

  .date-tag {
    justify-content: flex-start;
    margin-top: 5px;
  }

  .date-tag span:nth-child(1) {
    font-weight: 500;
    margin-bottom: 7px;
    font-size: 15px;
  }

  .date-tag span:nth-child(2) {
    font-size: 10px;
    filter: opacity(70%);
  }

  ::slotted {
    text-align: left;
    padding: 10px;
    font-size: 13px;
  }

  .bottom {
    padding: 15px 25px 15px 10px;
    display: flex;
    place-items: center;
  }

  .bottom div:nth-child(1) {
    margin-right: 10px;
  }

  .user-comment {
    width: 40px;
  }

  .input-wrapper {
    position: relative;
    flex-grow: 1;
  }

  .input-wrapper button {
    right: 4px;
    top: 0px;
    position: absolute;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: unset;
    padding: 0;
  }

  .send {
    color: hsl(210, 6%, 63%);
    margin: 2px;
    width: 30px;
    filter: opacity(35%);
  }

  .input-wrapper input {
    width: 100%;
    padding: 0.4rem;
    padding-left: 1rem;
    font-size: 0.8rem;
    z-index: 5;
    border-radius: 2rem;
  }

  .input-wrapper input:focus {
    outline: none;
    margin-left: -1.5px;
    border: 2.5px solid #5784f6a4;
    transition: all linear 0.2s;
  }
  .input-wrapper input::placeholder {
    opacity: 0.5;
  }
</style>
