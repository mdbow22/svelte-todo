import { writable } from "svelte/store";

//Get saved todos from localStorage
let tdList = JSON.parse(localStorage.getItem('to-dos'));

//If there weren't any, set list to empty array
if(!tdList) {
    tdList = [];
}

//create writable store with todos
export const ToDos = writable(tdList);