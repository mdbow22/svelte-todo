<script>
    import { ToDos } from '../stores';
    import Card from './Card.svelte';
    import ToDoItem from './ToDoItem.svelte';
    
</script>


{#each $ToDos as todo (todo.id)}
    <div class="to-do">
    <Card>
        <ToDoItem {todo} />
    </Card>
    </div>
{/each}

<style>
  .to-do {
    margin-bottom: 25px;
  }
</style>