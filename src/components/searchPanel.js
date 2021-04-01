import React from 'react';

const SearchPanel = () => {
    return (
       <div className="row">
           <div className="col">
               <input type="text" placeholder='search todo'/>
           </div>
           <div className="col">
               <ul className="btns">
                   <li>
                       <button type='button' className="btn"></button>
                   </li>
                   <li>
                       <button type='button' className="btn"></button>
                   </li>
                   <li>
                       <button type='button' className="btn"></button>
                   </li>
               </ul>
           </div>
       </div>
    );
};

export default SearchPanel;