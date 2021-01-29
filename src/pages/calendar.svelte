<script>
  import dayjs from "dayjs";

  const startOfWeek = dayjs().startOf("week");
  const today = dayjs().format("D");
  const weekdays = new Array(7)
    .fill(startOfWeek)
    .map((day, i) => day.add(i, "day").format("ddd D").split(" "));

  let assignmentArray = [
    { timeCreated: "10:08PM", title: "Data works", dateCreated: "30" },
    { timeCreated: "11:08PM", title: "Data works 2", dateCreated: "30" },
  ];
</script>

<main class="grid-container">
  {#each weekdays as day, i}
    <div class={i != 6 ? "border-edge flex-c roboto" : "flex-c roboto"}>
      <span class="day">{day[0]}</span>
      <div class="dayvalue">
        <span id={day[1] === today ? "today" : ""} class="month">{day[1]}</span>
      </div>
    </div>
  {/each}
  {#each weekdays as day, i}
    <div class={i != 6 ? "border-edge flex-c bottom" : "flex-c bottom"}>
      {#each assignmentArray as { timeCreated, title, dateCreated }}
        {#if dateCreated == day[1]}
          <span class="inserted">{timeCreated}{title}</span>
        {/if}
      {/each}
    </div>
  {/each}
</main>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 20% auto;
    margin: 3rem auto;
    width: 90%;
    max-width: 1000px;
    height: 70vh;
    border: 1px solid rgba(128, 128, 128, 0.363);
    border-radius: 5px;
  }

  .border-edge {
    border-right: 1px solid rgba(128, 128, 128, 0.363);
  }

  div {
    font-size: 19px;
    text-align: center;
  }

  .day {
    font-size: 12px;
    line-height: 32px;
    margin-bottom: 5px;
  }

  .day,.dayvalue{
    filter: opacity(80%);
  }

  .month {
    font-size: 34px;
    line-height: 40px;
  }

  #today {
    background-color: #4285f4;
    border-radius: 50%;
    padding: 7px;
    color: white ;
  }

  .inserted {
    background-color: #4285f4;
    color: white;
    padding: 5px;
    margin: 5px;
    font-size: 12px;
    line-height: 20px;
    border-radius: 3px;
  }
</style>
