<script>
  import Card from './lib/Card.svelte';
  import ToDoForm from './lib/ToDoForm.svelte';
  import ToDoList from './lib/ToDoList.svelte';
  import { ToDos } from './stores';

 

</script>

<main> 
  <h1>What To-Do?</h1>
  <Card>
    <div class="flex">
      <ToDoForm />
    </div>
    
  </Card>

  {#each $ToDos as todo (todo.id)}
    <p>{todo.task}</p>
  {/each}
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

  .flex {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 15px;
  }

</style>
