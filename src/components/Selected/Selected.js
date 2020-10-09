import React from 'react';
import '../Selected/Selected.css'

const Selected = (props) => {
    const selected = props.selected;
    let total = 0;
    // console.log(props.selected);

    for (let i = 0; i < selected.length; i++) {
        total = selected[i].yearlysalary+ total;

        
    }
    return (
        <div className="salarysum">
            <h4>I am Selected</h4>
            <p>Total Salary: {total}</p>
        </div>
    );
};

export default Selected;