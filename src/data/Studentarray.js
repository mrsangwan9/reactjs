import React from 'react'
import Student from "../Component/Student"
const Studentarray = (props) => {
  
    return (

    <>
         <ul className="nav bg-dark text-light nav-pills nav-fill">
                <li className="nav-item ">
                    <p className="nav-link " >Name</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" >Class</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" >RollNo</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link " >Section</p>
                </li>

            </ul>
            { 
            props.item.map(data => (
                
             <Student
                        Name = {data.Name}
                        Class={data.className}
                        RollNo = {data.RollNo}
                        Section =  {data.section} /> ))}     
     </>


    )
}

export default Studentarray