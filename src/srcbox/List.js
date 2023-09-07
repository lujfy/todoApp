let todoList = []

class todos{
    constructor(title , description , dueDate , priority , checklist){
        this.title = title 
        this.description = description
        this.dueDate = dueDate 
        this.priority = priority 
        this.checklist = checklist

    }


    
}




function addTask(){
    let title = document.querySelector('#title').value
    let description = document.querySelector('#description').value
    let dueDate = document.getElementById('dueDate').value
    let priority = document.getElementById('priority').value
    let checklist = document.getElementById('checklist').value
    
    let check = document.getElementById('checklist')
    if(check.checked) {
        checklist = true
    }
    else {
        checklist = false
    }

    let newTask =  new todos(title , description ,dueDate , priority , checklist)
    console.log(newTask)

    todoList.push(newTask)
}


function render() {
    console.log(todoList)
    let contentTodo = document.querySelector(".todoList")
    contentTodo.innerHTML = "" ; 

    for(let i = 0 ; i < todoList.length ; i++){
        let card = todoList[i] ;
        
        let cardHTML = document.createElement("div")
        cardHTML.setAttribute('class' , 'card')

        let part1 = document.createElement("div")
        part1.setAttribute("class" , "part1")

        let h5 = document.createElement("h5")
        h5.textContent= `${card.title}`
        let p1 = document.createElement("p1")
        p1.textContent = `${card.description}`
        let p2 = document.createElement("P")
        p2.textContent = `${card.dueDate}`

        part1.appendChild(h5)
        part1.appendChild(p1)
        part1.appendChild(p2)

        let part2 = document.createElement("div")
        part2.setAttribute("class" , "part2")

        let priority = document.createElement("div")
        priority.textContent= `${card.priority}`

        let status = document.createElement("button")
        status.textContent = `${card.checklist ? "Done" : "Not Done"}`
        status.setAttribute('class' , 'statusbtn')

        status.addEventListener("click" , function() {
            card.checklist = !card.checklist
            status.textContent = `${card.checklist ? "Done" : "Not Done"}`
            status.style.backgroundColor = `${card.checklist ? "yellowgreen" : "red"}`

        })

        let remove = document.createElement("button")
        remove.textContent = `Remove Task`

        remove.setAttribute('class' , 'removebtn')
        remove.addEventListener("click" , function() {
            todoList.splice( i , 1)
            render() ;
        })

        part2.appendChild(priority)
        part2.appendChild(status)
        part2.appendChild(remove)

        cardHTML.appendChild(part1)
        cardHTML.appendChild(part2)

    
    contentTodo.appendChild(cardHTML)
    }

    
    
}

export default todos ;
export {addTask , render}