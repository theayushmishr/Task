import {addBtn,newTask,container} from "./setUpUI.js"
import { toDoList} from "./taskManager.js"
import {items} from "./generate.js"
export  function setupButton(){
    addBtn.addEventListener("click",()=>{
        toDoList.addTask(newTask.value,false)
        newTask.value =""
        renderItem()
    })
    

    function renderItem(){
        items()
    }
}


  
