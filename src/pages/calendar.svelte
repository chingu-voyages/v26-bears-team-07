<script>
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { left, right } from "../utils/image-constants";
  import  { formatWeekDisplay } from "../utils/utils"

  let presentWeek = [];
  let startOfWeek;
  let endOfWeek;
  let weeks;
  let today;
  let assignmentArray = [
    { timeCreated: "10:08PM", title: "Data works", dateCreated: "Fri 29 January 2021" },
    { timeCreated: "11:08PM", title: "Data works 2", dateCreated: "Fri 29 January 2021" },
  ];
  let classes = ["AllClasses"];

  onMount(() => {
    startOfWeek = dayjs().startOf("week");
    today = dayjs().format("ddd D MMMM YYYY");
    presentWeek = new Array(7)
      .fill(startOfWeek)
      .map((day, i) => day.add(i, "day").format("ddd D MMMM YYYY").split(" "));
    weeks = formatWeekDisplay(presentWeek); 
  });

  const generateNextWeek = (present) => {
    presentWeek = present.map((day, i) =>
      dayjs(day.join(" ")).add(7, "days").format("ddd D MMMM YYYY").split(" ")
    );
    weeks = formatWeekDisplay(presentWeek);
  };

  const generatePreviousWeek = (present) => {
    presentWeek = present.map((day, i) =>
      dayjs(day.join(" "))
        .subtract(7, "days")
        .format("ddd D MMMM YYYY")
        .split(" ")
    );
    weeks = formatWeekDisplay(presentWeek);
  };
</script>

<main>
  <section class="controls flex-r">
    <div id="classworks" class="flex-c top-control">
      <select name="classworks" id="classes">
        {#each classes as className}
          <option value={className}>{className}</option>
        {/each}
      </select>
    </div>
    <div id="weekrange" class="flex-r roboto">
      <span on:click={generatePreviousWeek(presentWeek)}
        ><img src={left} alt="last-week" /></span
      >
      <span>{weeks}</span>
      <span on:click={generateNextWeek(presentWeek)}
        ><img src={right} alt="next-before" /></span
      >
    </div>
    <div />
  </section>
  <section class="grid-container">
    {#each presentWeek as day, i}
      <div class={i != 6 ? "border-edge flex-c roboto" : "flex-c roboto"}>
        <span class="day">{day[0]}</span>
        <div class="dayvalue">
          <span id={day.join(" ") === today ? "today" : ""} class="month"
            >{day[1]}</span
          >
        </div>
      </div>
    {/each}
    {#each presentWeek as day, i}
      <div class={i != 6 ? "border-edge flex-c bottom" : "flex-c bottom"}>
        {#each assignmentArray as { timeCreated, title, dateCreated }}
          {#if dateCreated === day.join(" ")}
            <span class="inserted">{timeCreated}{title}</span>
          {/if}
        {/each}
      </div>
    {/each}
  </section>
</main>

<style>
  main {
    margin: 3rem auto;
    width: 90%;
    max-width: 1000px;
    height: 90vh;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 20% auto;
    width: 100%;
    height: 70%;
    border: 1px solid rgba(128, 128, 128, 0.363);
    border-radius: 5px;
  }

  .controls {
    justify-content: space-between;
  }

  #classes {
    padding: 10px 22px;
    border: unset;
    color: rgba(0, 0, 0, 0.678);
    border-radius: 3px;
  }

  #classes:focus {
    outline: none;
  }
  #weekrange {
    align-self: center;
    font-size: 15px;
  }

  #weekrange span {
    margin: 3px;
  }
  #weekrange span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #weekrange span:nth-child(1):hover,
  #weekrange span:nth-child(3):hover {
    background-color: rgba(0, 0, 0, 0.048);
  }
  #weekrange img {
    width: 25px;
    cursor: pointer;
  }
  #classworks {
    margin-top: 7px;
  }
  .border-edge {
    border-right: 1px solid rgba(128, 128, 128, 0.363);
  }

  div {
    text-align: center;
  }

  .day {
    font-size: 12px;
    line-height: 32px;
    margin-bottom: 5px;
  }

  .day,
  .dayvalue {
    filter: opacity(80%);
  }

  .month {
    font-size: 30px;
    line-height: 40px;
  }

  #today {
    background-color: #4285f4;
    border-radius: 50%;
    padding: 7px;
    color: white;
  }

  .inserted {
    background-color: #4285f4;
    color: white;
    padding: 5px;
    margin: 5px;
    font-size: 12px;
    line-height: 20px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
