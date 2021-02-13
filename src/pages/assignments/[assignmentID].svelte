<script>
  import { params } from "@roxi/routify";
  import { findAssignment } from "../../stores/query";
  import Button from "../../components/Header/Button.svelte";
  import dayjs from "dayjs";

  let {
    data: {
      result: { title, classData, text, due, points },
    },
  } = findAssignment({ assignmentID: $params.assignmentID });
</script>

<Button><a href="/stream/{classData._id}">Back to class</a></Button>

<h1>{title}</h1>
<p>Directions: {text}</p>
<p>Due: {dayjs(due).format("DD/MM/YYYY")}</p>
<p>Points: {points}</p>
