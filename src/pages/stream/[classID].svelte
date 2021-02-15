<script>
  import { params } from "@roxi/routify";
  import Badge from "../../components/Streams/Badge.svelte";
  import Announcer from "../../components/Streams/Announcer.svelte";
  import Announce from "../../components/Streams/Announce.svelte";
  import Announcement from "../../components/Streams/Announcement.svelte";
  import Tasks from "../../components/Streams/Tasks.svelte";
  import { findClass, findStreams } from "../../stores/query";
  import dayjs from "dayjs";
  import { teacher } from "../../utils/image-constants";
  import { assignmentsByClassID } from "../../stores/query";
  const assignmentsQuery = assignmentsByClassID({ classID: $params.classID });

  let classData = findClass({ classID: $params.classID });
  let inviteCode, className;
  let addAnnouncement = false;
  /**All assignments from database*/
  let announcementsArray = [];
  let assignmentsArray = [];
  $: if ($assignmentsQuery.data)
    assignmentsArray = [...$assignmentsQuery.data.result.assignments.data];

  // get data from DB
  let streamData = findStreams({ classID: $params.classID });
  $: if ($streamData.data) {
    let streams = $streamData.data.result.streams.data;
    announcementsArray = streams.map(
      ({
        message,
        author: { name: username },
        comments: { data: comments },
        _id,
        _ts,
      }) => ({
        message,
        username,
        comments: comments.map(({ message, author: { name }, _ts }) => ({
          name,
          message,
          _ts,
        })),
        _id,
        _ts,
      })
    );
  }

  $: if ($classData.data) {
    ({ invite: inviteCode, name: className } = $classData.data.result);
  }

  const createAnnouncement = () => (addAnnouncement = true);
  const closeAddAnouncementWindow = () => {
    addAnnouncement = false;
  };

  function formatDate(ts) {
    let d = dayjs(ts / 1000);
    let now = dayjs();
    let dayAgo = now.subtract(1, "day");

    return dayAgo.isBefore(d)
      ? d.format("h:mm A")
      : now.isSame(d, "year")
      ? d.format("MMM D")
      : d.format("MMM YYYY"); // not same year
  }
</script>

<main>
  <Badge {inviteCode} {className} />
  <div class="flex-r announcements">
    <div class="task">
      <Tasks>
        <ul>
          {#each assignmentsArray as { due, title }}
            <li>
              {`${dayjs(due).format("DD/MM")} - ${title.substring(0, 10)}${
                title.length > 15 ? "..." : ""
              }`}
            </li>
          {/each}
        </ul>
      </Tasks>
    </div>
    <section>
      <div>
        {#if !addAnnouncement}
          <Announcer on:add_announcement={createAnnouncement} />
        {:else}
          <Announce
            {className}
            on:closeAddAnouncement={closeAddAnouncementWindow}
          />
        {/if}
      </div>
      <Announcement>
        <p slot="classwork" class="open-sans slot-head">
          This is test announcement
        </p>
        <div slot="comments" class="comments roboto">
          <p>this is test comment</p>
          <p>this is test comment 2</p>
          <p>this is test comment 3</p>
        </div>
      </Announcement>
      <!-- announcement name, array of comments, data created -->
      {#each announcementsArray as { username, _ts, message, comments, _id }}
        <Announcement dateCreated={formatDate(_ts)} {username} {_id}>
          <p slot="classwork" class="open-sans slot-head">{message}</p>
          <div slot="comments" class="comments roboto">
            {#if comments.length}
              <p>
                {comments.length} class comment{comments.length > 1 ? "s" : ""}
              </p>
            {/if}
            {#each comments as { name: username, message, _ts }}
              <section class="comment">
                <img src={teacher} alt="Announcer icon" />

                <p class="comment-info">
                  <span class="username">{username}</span>
                  <span class="date">{formatDate(_ts)}</span>
                </p>

                <p class="message">{message}</p>
              </section>
            {/each}
          </div>
        </Announcement>
      {/each}
    </section>
  </div>
</main>

<style>
  main {
    margin: 3rem auto;
    width: 90%;
    max-width: 1000px;
  }

  .announcements {
    margin-bottom: 20px;
  }

  .task {
    width: 210px;
    margin: 0 1rem 0 0;
  }

  section {
    flex-grow: 1;
  }

  ul {
    list-style: none;
    line-height: 1.5rem;
    padding: 0;
  }

  .slot-head {
    margin-left: 15px;
  }

  .comments {
    margin: 15px;
    margin-top: 0;
  }

  .comments p {
    color: rgba(0, 0, 0, 0.692);
  }
  .comments p:first-child {
    margin-top: 0;
  }

  .comment {
    display: grid;
    grid-template-columns: 2rem auto;
    grid-auto-rows: max-content;
    gap: 0.5rem 1rem;
    margin-top: 1rem;
  }
  .comment p {
    margin: 0;
  }
  .comment img {
    width: 2.4rem;
    grid-row: 1/3;
    place-self: center;
  }
  .message {
    grid-row: 2/3;
  }
  .username {
    font-weight: 600;
    font-size: 0.8rem;
    margin-right: 0.2rem;
  }
  .date {
    font-size: 0.6rem;
  }

  @media (max-width: 780px) {
    .task {
      display: none;
    }
  }
</style>
