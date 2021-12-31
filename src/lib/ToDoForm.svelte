<script>
    import { ToDos } from '../stores';

    let task = '';

    const addToDo = () => {
        //make sure they typed something in
        if(task.length === 0) {
            return;
        }

        //make new todo object
        let newToDo = {
            id: $ToDos.length + 1,
            task: task,
            done: false
        }

        //add to store
        ToDos.update((list) => {
            return [newToDo, ...list];
        });

        //add to local storage
        localStorage.setItem('to-dos', JSON.stringify($ToDos)); 

        //reset form
        task = '';
    }
  
</script>

<form on:submit|preventDefault={addToDo}>
    <div class="inputs">
      <input type="text" bind:value={task} class="toDoInput" placeholder="Yet another task..." />
    </div>
    <button type="submit" class="btnSubmit">Add</button>
</form>

<style>
  form {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .inputs {
      min-width: 75%;
  }

  .toDoInput {
    border: none;
    background-color: transparent;
    width: 100%;
    font-size: 1.5em;
    font-weight: bold;
    color: #190028;
  }

  .toDoInput:focus {
    border: none;
    outline: none;
  }

  .btnSubmit {
    background: #FBF6FF;
    border: 1px solid #190028;
    box-shadow: 2px 2px 4px rgba(25, 0, 40, 0.5);
    font-size: 1.5em;
    color: #190028;
    font-weight: bold;
    cursor: pointer;
    line-height: 1.75em;
    flex-basis: 100px;
  }

  .btnSubmit:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
</style>