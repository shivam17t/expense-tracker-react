import React from "react";
import './ExpenseFilter.css'
const ExpenseFilter=(props)=>{

    const FilteredYear = event => {
        props.Filter(event.target.value);
    }
    return <div className="ExpenseFilter_control">
        <label>Filter for Year</label>
        <select value = {props.selected} onChange={FilteredYear}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>;
};

export default ExpenseFilter;