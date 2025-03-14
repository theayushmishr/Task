
import {items} from "./generate.js"
export const toDoList = {
    tasks : [],
    addTask : function(title,completed){
        const task = {
            title: title,
            completed:completed,
        }
        if(!title.trim())
            return 
        else
          this.tasks.push(task)
          console.log(`${title} - Added`);
    },
    removeTask : function(index){
        console.log("Task deleted:",index)
        this.tasks.splice(index,1)
        items();
    },
    // showTask : function(){
    //     this.tasks.forEach(task => {
    //         console.log(task.title)
    //     });
        
    // }
}
