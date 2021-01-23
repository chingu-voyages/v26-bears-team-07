<script>
  import { params } from "@roxi/routify";
  import { usersByClassID } from "../../stores/query";

  let classData = usersByClassID({ classID: $params.classID });

  let teachers = [];
  let students = [];
  $: if ($classData?.data) {
    teachers = $classData.data.result.teachers.data;
    students = $classData.data.result.students.data;
  }
</script>

<div>
  <h2>Teachers</h2>
  {#each teachers as { name }}
    <p>{name}</p>
  {/each}
</div>

<div>
  <h2>Students</h2>
  {#each students as { name }}
    <p>{name}</p>
  {/each}
</div>
