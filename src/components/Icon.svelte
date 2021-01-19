<script>
   export let name;
   
   function getAlt(name){
      return name.split('/')[1]
   }
</script>

<style>
   img {
    margin: 0 10px; 
    width: 30px;
    cursor: pointer;
    padding: 5px;
    margin-right: 20px;
    color: rgba(0, 0, 0, 0.829);
   }

   img:hover{
      background-color: rgb(245, 245, 245);
      border-radius: 50%;
   }
</style>

<img alt={getAlt(name)} src={name} on:click />