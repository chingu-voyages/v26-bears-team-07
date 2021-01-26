<script>
  import { params } from "@roxi/routify";
  import Badge from "../../components/Streams/Badge.svelte";
  import Announcer from "../../components/Streams/Announcer.svelte";
  import Announce from "../../components/Streams/Announce.svelte";
  import Announcement from "../../components/Streams/Announcement.svelte";
  import Tasks from "../../components/Streams/Tasks.svelte";
  import { findClass, findStreams } from "../../stores/query";

  let classData = findClass({ classID: $params.classID });
  let inviteCode, className;
  let addAnnouncement = false;
  /**All assignments from database*/
  let announcementsArray = [];

  // get data from DB
  let streamData = findStreams({ classID: $params.classID });
  $: console.log($streamData);

  $: if ($classData.data) {
    ({ invite: inviteCode, name: className } = $classData.data.result);
  }

  const createAnnouncement = () => (addAnnouncement = true);
  const closeAddAnouncementWindow = () => {
    addAnnouncement = false;
  };
</script>

<main>
  <Badge {inviteCode} {className} />
  <div class="flex-r announcements">
    <div class="task"><Tasks /></div>
    <section>
      <div>
        {#if !addAnnouncement}
          <Announcer on:add_announcement={() => createAnnouncement()} />
        {:else}
          <Announce
            on:closeAddAnouncement={() => closeAddAnouncementWindow()}
          />
        {/if}
      </div>
      <!-- this is a default announcement view for preview only -->
      <!-- remove this block  -->
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
      <!-- remove this block  -->
      <!-- this is the end of a default announcement view for preview only -->
      <!-- announcement name, array of comments, data created -->
      {#each announcementsArray as { name, comments, dateCreated }}
        <Announcement {dateCreated}>
          <p slot="classwork" class="open-sans slot-head">{name}</p>
          <div slot="comments" class="comments roboto">
            {#each comments as comment}
              <p>{comment}</p>
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

  .slot-head {
    margin-left: 15px;
  }

  .comments {
    margin: 15px;
  }

  .comments p {
    color: rgba(0, 0, 0, 0.692);
  }

  @media (max-width: 780px) {
    .task {
      display: none;
    }
  }
</style>
