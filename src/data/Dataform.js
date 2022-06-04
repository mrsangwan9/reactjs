import React, { useState } from 'react'

const Dataform = (props) => {

     const [Name, setName] = useState('');
    const [Class, setClass] = useState('');
    const [RollNo, setRollNo] = useState('');
    const [Section, setSection] = useState('');
   
    let Namechange = (event) => {
        // console.log(event.target.value)
        setName(event.target.value)
    }
    let Classchange = (event) => {
        // console.log(event.target.value)
        setClass(event.target.value)

    }
    let RollNochange = (event) => {
        // console.log(event.target.value)
        setRollNo(event.target.value)
    }
    let Sectionchange = (event) => {
        // console.log(event.target.value)
        setSection(event.target.value)

    }
    const formsumbit = (event) => {
        event.preventDefault()
    
    
     let addnewobj ={
               Name:Name,
              className:Class,
             RollNo :RollNo,
            section:Section,
    }
    props.addnewdata(addnewobj)
    }
    return (

        <>
            <form className="form-inline" onSubmit={formsumbit}>
                <h5>Enter New Student details:-  </h5>
                <input type="text" value={Name} onChange={Namechange} className="form-control ml-2 mb-2 mt-2 mr-sm-2" id="inlineFormInputName2" placeholder="Student Name" />
                <input type="text" value={Class} onChange={Classchange} className="form-control mb-2 mt-2  mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="Class" />
                <input type="text" value={RollNo} onChange={RollNochange} className="form-control mb-2 mt-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="RollNo" />
                <input type="text" value={Section} onChange={Sectionchange} className="form-control mb-2 mt-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="Section" />
                <button type="submit" className="btn btn-primary mb-2 mt-2">Add Studnet</button>
            </form>
        </>
    )
}

export default Dataform