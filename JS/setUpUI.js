import { toDoList} from "./taskManager.js"

    document.body.innerHTML = ""

    // header
    const header = document.createElement("header")
    document.body.appendChild(header)

    //header > nav
    const nav = document.createElement("nav")
    header.appendChild(nav)

    //header > nav > nav-logo
    const navLogo = document.createElement("div")
    navLogo.classList.add("nav-logo")
    navLogo.innerHTML = `<svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>`
    nav.appendChild(navLogo)
    

    // header > nav > nav-menu
    const navMenu = document.createElement("div")
    navMenu.classList.add("nav-menu")
    nav.appendChild(navMenu)
    const menuList = document.createElement("div")
    menuList.classList.add("menu-list")
    navMenu.appendChild(menuList)
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item","user-profile")
    menuItem.innerHTML = `<svg clip-rule="evenodd" width="24" height="24"fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero"/></svg>`
    menuList.appendChild(menuItem)

    // main
    const main = document.createElement("div")
    main.classList.add("main")
    document.body.appendChild(main)
    // main > container
    const container = document.createElement("div")
    container.className = "container"
    main.appendChild(container)
    const mainTitle = document.createElement("h1")
    mainTitle.classList.add("main-title")
    mainTitle.innerText ="TASK"
    container.appendChild(mainTitle)
    const userInput = document.createElement("div")
    userInput.classList.add("user-input")
    container.appendChild(userInput)
    
    
    
    
    

   // Top section
   const newTask = document.createElement("input")
   newTask.className = "new-task"
   userInput.appendChild(newTask)
   const addBtn = document.createElement("button")
   addBtn.className ="add-btn"
   userInput.appendChild(addBtn)
   addBtn.innerHTML=`<svg clip-rule="evenodd" width="24" height="24" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>`
   //Task List
   const list = document.createElement("ul")
   list.className = "task-list"
   container.appendChild(list)





   export {addBtn,newTask,list,container}