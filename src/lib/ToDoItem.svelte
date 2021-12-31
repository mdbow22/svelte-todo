<script>
    import { ToDos } from '../stores';

    export let todo;
    
    // @ts-ignore
    let task = todo.task;

    const deleteTask = () => {
        //update store so no longer has task with id that was clicked
        ToDos.update((list) => {
            return list.filter((item) => item.id !== todo.id)
        });

        //update localStorage to match store
        localStorage.setItem('to-dos', JSON.stringify($ToDos));
    }

    const completeTask = () => {

        //update store so item is set to complete
        ToDos.update((list) => {
            let index = list.findIndex(item => item.id === todo.id);

            list[index].done = !list[index].done;

            return list;
        });

        //update localStorage
        localStorage.setItem('to-dos', JSON.stringify($ToDos));
    }

    const updateToDo = () => {
        //create object for new todo
        let updatedTask = {
            id: todo.id,
            task: task,
            done: false
        }

        //update store to include updated task
        ToDos.update((list) => {
            //find index in array of task being updated
            let index = list.findIndex(item => item.id === updatedTask.id);

            //set that index to the updated task
            list[index] = updatedTask;

            //return it
            return list;
        });

        //update localStorage
        localStorage.setItem('to-dos', JSON.stringify($ToDos));
    }
</script>

<div class="card-container">
    <input class={todo.done ? 'to-do-item finished' : 'to-do-item'} type="text" bind:value={task} on:blur={updateToDo} /> 

    <div class="item-buttons">
        <button type="btn" on:click|preventDefault={completeTask}><i class="fas fa-check"></i></button>
        <button type="btn" on:click|preventDefault={deleteTask}><i class="fas fa-times"></i></button>
    </div>
</div>

<style>
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
        min-width: 75%;
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

    .finished {
        text-decoration: line-through;
        color: green;
    }
</style>