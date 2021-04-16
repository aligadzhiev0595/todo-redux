import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {statusBtn, setSearchInput} from "../redux/reducers/reducerTodo";

const SearchPanel = () =>{
    const dispatch = useDispatch();
    const setStatusBtn = useSelector(s => s.reducerTodo.statusBtn);
    const searchInput = useSelector((s) => s.reducerTodo.searchInput);
    const formHandler = (e) => {
        e.preventDefault();
      };
    const statusHandler = (e) => {
        dispatch(statusBtn(e.target.value))
    }
    return (
        <div className="row">
            <div className="col">
                <input className='input-search'
                type="text"
                placeholder='search todo'
                onChange={(e) => dispatch(setSearchInput(e.target.value))}
                />
            </div>
            <div className="col">
                <ul className="btns">
                    <li>
                        <button className={`btn btn-outline-info ${setStatusBtn === 'all' ? 'active' : ''}`} onClick={statusHandler} value ='all'>all</button>
                    </li>
                    <li>
                        <button className={`btn btn-outline-info ${setStatusBtn === 'active' ? 'active' : ''}`} onClick={statusHandler} value ='active'>active</button>
                    </li>
                    <li>
                        <button className={`btn btn-outline-info ${setStatusBtn === 'done' ? 'active' : ''}`} onClick={statusHandler} value ='done'>done</button>
                    </li>
                    <li>
                        <button className={`btn btn-outline-info ${setStatusBtn === 'recently' ? 'active' : ''}`} onClick={statusHandler} value ='recently'>recently</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SearchPanel;