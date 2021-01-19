<script>
  if (typeof window !== "undefined" && location.search) {
    let params = new URLSearchParams(location.search);
    var id = params.get("id");
    console.log(id);
  }
</script>
