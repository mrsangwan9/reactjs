import React, { useState } from 'react'
const Student = (props) => {
  
  return (
<>

      <ul className="nav bg-dark text-light nav-pills nav-fill">
        <li className="nav-item ">
          <p className="nav-link " >{props.Name}</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >{props.Class}</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" >{props.RollNo}</p>
        </li>
        <li className="nav-item">
          <p className="nav-link " >{props.Section}</p>
        </li>
      </ul>
</>
  )
}

export default Student














//   let SectionValue = props.Section
//   const [newvalue, setNewvalueupdate] = useState("");
//  const [section, setsection] = useState(SectionValue);
//   const UpdateSection = () => {
//     setsection(newvalue);
//   }
//   const ChangeSection=(event)=>{
// //     setNewvalueupdate(event.target.value);
// //   }
// {/* <li >
// <input type="text" value={newvalue} onChange={ ChangeSection }></input>
// <button onClick={UpdateSection}>Update</button>
// </li> */}