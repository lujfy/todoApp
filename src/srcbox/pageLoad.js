
import todos, { render } from "./List";
import { addTask } from "./List";


function initialLoad(){
    document.querySelector("#new-todos-form").addEventListener('submit' , function() {
        event.preventDefault();
        addTask() ;
        render() ;
    })
}

export default initialLoad ;