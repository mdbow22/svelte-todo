<script>
  import Card from './lib/Card.svelte';
  import ToDoForm from './lib/ToDoForm.svelte';
  import ToDoList from './lib/ToDoList.svelte';
</script>

<main> 
  <h1>What To-Do?</h1>
  <div class="top">
    <Card>
      <div class="flex">
        <ToDoForm />
      </div>
    </Card>
  </div>
  <div class="list">
    <ToDoList />
  </div>
</main>

<style>

  main {
    max-width: 768px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-top: 50px;
    font-size: 4.5em;
  }

  .top {
    margin-bottom: 50px;
  }

  .flex {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 15px;
  }

</style>
