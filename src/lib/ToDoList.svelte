<script>
    import { ToDos } from '../stores';
    import Card from './Card.svelte';
</script>


{#each $ToDos as todo (todo.id)}
    <div class="to-do">
    <Card>
        <div class="card-container">
            <input class="to-do-item" type="text" value={todo.task} /> 

            <div class="item-buttons">
                <button type="btn"></button>
                <button type="btn">X</button>
            </div>
        </div>
    </Card>
    </div>
{/each}

<style>
  .to-do {
    margin-bottom: 25px;
  }

  .card-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin: 0 15px;
  }

  .to-do-item {
    border: none;
    background-color: transparent;
    font-size: 1.5em;
    font-weight: bold;
    color: #190028;
  }

  .to-do-item:focus {
    border: none;
    outline: none;
  }

  .item-buttons {
      display: flex;
      justify-content: space-between;
      flex-basis: 100px;
  }

  .item-buttons button {
    background: #FBF6FF;
    border: 1px solid #190028;
    box-shadow: 2px 2px 4px rgba(25, 0, 40, 0.5);
    font-size: 1.5em;
    color: #190028;
    font-weight: bold;
    cursor: pointer;
    line-height: 1.75em;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 40px;
  }

  .item-buttons button:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
</style>