import React from 'react';

const TodoList = () => {
    return (
       <ul className="todolist">
           <li className="todo">
               <p>123</p>
               <div className="buttons">
                   <button type="button">1</button>
                   <button type="button">2</button>
                   <button type="button">3</button>
               </div>
           </li>
       </ul>
    );
};

export default TodoList;