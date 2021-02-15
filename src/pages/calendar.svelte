<script>
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { left, right } from "../utils/image-constants";
  import { formatWeekDisplay, generatePresentWeek } from "../utils/utils";
  import { allAssignmentsByUserID, classesByUserID } from "../stores/query";
  import { authStore } from "../stores/auth";

  // console.log(dayjs().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")); // yyyy-02-SuT18:28:47.947+01:00
  let classOptions;
  let presentWeek = [];
  let startOfWeek;
  let weeks;
  let today;

  let assignmentsData = [];
  let classes = [];
  let classAssignments = [];
  let selectedClass = "All Classes";
  let selectedIndex = 0;

  //query operation for class select options
  const classesQuery = classesByUserID({ id: $authStore.id });
  $: if ($classesQuery.data)
    classOptions = [...$classesQuery.data.result.teaches.data];
  $: if (classOptions)
    classes = ["All Classes", ...classOptions.map((data) => data.name)];

  const getSelecteddIndex = (selected, classes) => classes.indexOf(selected);

  $: selectedIndex =
    getSelecteddIndex(selectedClass, classes) === (0 || -1)
      ? 0
      : getSelecteddIndex(selectedClass, classes);

  //get assignments per class or return all
  const formatAssignmentsData = (allAssignments, index) => {
    let thisAssignmentData = [];
    if (index !== 0) {
      thisAssignmentData = allAssignments[index - 1];
      return thisAssignmentData.assignments.data;
    } else {
      allAssignments.forEach((val) => {
        for (const iterator of val.assignments.data) {
          thisAssignmentData.push(iterator);
        }
      });
      return thisAssignmentData;
    }
  };

  //query operation to get all assignments
  const assignmentQuery = allAssignmentsByUserID($authStore.id);
  $: if ($assignmentQuery.data)
    assignmentsData = assignmentQuery.data.result.teaches.data;
  $: if (assignmentsData)
    classAssignments = formatAssignmentsData(assignmentsData, selectedIndex);

  const formatTimeAndDate = (dataTime) => {
    // 2021-02-12T22:16:41.177Z
    return {
      date: dayjs(dataTime).format("ddd D MMMM YYYY"),
      time: dayjs(dataTime).format("HH:mm a"),
    };
  };

  onMount(() => {
    startOfWeek = dayjs().startOf("week");
    today = dayjs().format("ddd D MMMM YYYY");
    presentWeek = new Array(7)
      .fill(startOfWeek)
      .map((day, i) => day.add(i, "day").format("ddd D MMMM YYYY").split(" "));
    weeks = formatWeekDisplay(presentWeek);
  });

  const generateNextWeek = (present) => {
    presentWeek = generatePresentWeek("add", "ddd D MMMM YYYY", present);
    weeks = formatWeekDisplay(presentWeek);
  };

  const generatePreviousWeek = (present) => {
    presentWeek = generatePresentWeek("subtract", "ddd D MMMM YYYY", present);
    weeks = formatWeekDisplay(presentWeek);
  };
</script>

<main>
  <section class="controls flex-r">
    <div id="classworks" class="flex-c top-control">
      <select name="classworks" id="classes" bind:value={selectedClass}>
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
        {#each classAssignments as { title, created }}
          {#if formatTimeAndDate(created).date === day.join(" ")}
            <div class="inserted flex-r">
              <span>{title}</span>
              <span>({formatTimeAndDate(created).time})</span>
            </div>
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
    height: 70vh;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 20%;
    width: 100%;
    height: 100%;
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
    justify-content: flex-start;
    align-items: center;
    font-size: 10px;
    font-weight: 600;
  }

  .inserted span:nth-child(1) {
    margin-right: 4px;
  }
</style>
