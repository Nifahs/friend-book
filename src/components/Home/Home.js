import React, { useState } from 'react';
import Person from '../Person/Person';
import Selected from '../Selected/Selected';
import fakedata from '../../data/fake_users.json'

const Home = () => {

    // console.log(fakedata);
    const [persons, setPerson]=useState(fakedata)
    const [selected, setSelected] = useState([])
    const handlePerson = (person)=>{
        // console.log('button clicked', person);
        const newSelected = [...selected, person];
        setSelected(newSelected);
            }

    return (
        <div className='container row'>
        
            <div className="Persons col">
                
                {
                    persons.map(prsn =>
                        <Person
                         person={prsn}
                         handlePerson ={handlePerson}
                         ></Person>
                    
                    )
                }
            </div>
            <div className="selected col">
                
                <p>Person added: {selected.length}</p>
                <Selected selected = {selected}></Selected>
            </div>
        </div>
    );
};

export default Home;