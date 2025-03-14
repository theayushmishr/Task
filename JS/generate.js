
import {list} from "./setUpUI.js"
import { toDoList } from "./taskManager.js"

export const items = ()=>{
    list.innerHTML ="";
    for (let i = 0; i < toDoList.tasks.length; i++) {
        const item = document.createElement("li")
    item.className = `item${i}`
    list.appendChild(item)
    itemContent(item,i)
    }
}
const itemContent =(parent,taskIndex)=>{
    const title = document.createElement("h3")
    title.className = `${parent.className}-title`
    parent.appendChild(title)
    title.innerText = toDoList.tasks[taskIndex].title

    const checkboxLabel = document.createElement('label')
    checkboxLabel.classList.add("checkbox-label")
    parent.appendChild(checkboxLabel)


    const checkbox = document.createElement("input")
    checkbox.classList.add("checkbox")
    checkbox.type = "checkbox"
    checkbox.checked = toDoList.tasks[taskIndex].completed
    checkboxLabel.appendChild(checkbox)

    const checkboxBox = document.createElement("span")
    checkboxBox.className = "checkbox-box"
    checkboxLabel.appendChild(checkboxBox)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click",()=>{toDoList.removeTask(taskIndex)}) 
    deleteBtn.classList.add("del-btn")
    deleteBtn.innerHTML = `<svg clip-rule="evenodd" width="16px" height="16px" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg>`
    parent.appendChild(deleteBtn)
    deleteBtn.addEventListener("click",()=>{
        // toDoList.removeTask(taskIndex) creating bug cause taskIndex becomes outdated after deletion, causing wrong task removal.
        const taskIndex = Array.from(parent.children).indexOf(deleteBtn.parentElement);
        console.log("delete")
    })

}