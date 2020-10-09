import React from 'react';
import '../Person/Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
const Person = (props) => {

    // console.log(props);
    const{name, email, image, phone, yearlysalary} = props.person;
    // console.log
    return (
        
        
      <div className='person'>
          <div className>
                <img src={image} alt=""/>

            </div>
            <div className='personinfo'>
                <h5>Name: {name}</h5>
                <p>Email: {email}</p> 
                <p>Phone: {phone}</p> 
                <p>Yearly Salary: {yearlysalary}</p>  
                <button className='btn btn-primary' onClick={()=>{props.handlePerson(props.person)}}><FontAwesomeIcon icon={faPlusSquare} />Add friend</button>
            </div>       
            
            
      </div>
      

      
    );
};

export default Person;