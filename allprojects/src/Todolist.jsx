import { logDOM } from '@testing-library/dom';
import React, { useState } from 'react'

export default function Todolist() {

    // USESTATE
    let [todolist, setTodolist] = useState([]);

    // COLLECT ITEMS FUNCTION
    let todolistData = (event) => {
        event.preventDefault();

        let todo = event.target.todoitem.value;

        if (!todolist.includes(todo)) {

            let finaltodoList = [...todolist, todo]
            setTodolist(finaltodoList)

        } else {
            alert("This item already exist")
        }

        event.target.todoitem.value = ''
    }

    // SHOW ITEMS FUNCTION
    let showtodoList = todolist.map((item, i) => {
        return (
            <List item={item} indexNumber={i} todolist={todolist} setTodolist={setTodolist} key={item} />
        )

    })



    // ------------------------------------------------------------------------------------------------------------------------------------


    return (
        <div className='max-w-[1270px] bg-orange-400 p-6 mx-auto mt-3'>
            <h1 className='mb-6 font-bold'>28. Building a TODO List App | PROJECT</h1>

            <form className='w-[80%] mx-auto' onSubmit={todolistData}>

                <input className='w-[80%] py-[5px] ps-[10px]' type='text' name='todoitem' />

                <button className='w-[20%] bg-yellow-400 py-[5px] '>Save</button>
            </form>

            <div>
                <ul className='mt-5 w-[80%] mx-auto'>
                    {showtodoList}
                </ul>
            </div>

        </div>
    )
}




// LIST COMPONENT
function List({ item, indexNumber, todolist, setTodolist }) {


    // DELETE FUNCTION
    let deleterow = (event) => {
        event.stopPropagation();
        let filtereditems = todolist.filter((item, i) =>
            indexNumber != i
        )
        setTodolist(filtereditems)
    }

    let [taskComplete, setTaskComplete] = useState(false)


    return (
        <li className={`bg-yellow-400 text-left ps-[15px] py-2 relative mb-[10px] ${taskComplete ? 'line-through bg-green-500 after:content-["Completed"]' : ''} `} onClick={() => setTaskComplete(!taskComplete)}>{indexNumber + 1} {item} <span className='absolute right-[15px] cursor-pointer' onClick={deleterow}>&times;</span></li>
    )
}



// COMPLETED PROJECT



