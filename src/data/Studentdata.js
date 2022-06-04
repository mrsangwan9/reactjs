import React, {useState} from 'react'
import Studentarray from './Studentarray'
import Dataform from "./Dataform"


let  initial_data =[]

function Studentdata () {

// to fetch data from api...
    //     fetch("https://code.org/schools.json").then(response=>{
//       return response.json();}).then(data=>{
//       console.log(data)})
  
const [newdata, setnewdata] = useState(initial_data);
    const datacollect =(collector)=>{
            let id = Math.random();
            collector =[collector,id]
             let studentdata = [collector,initial_data]
             setnewdata(studentdata)
    }
     
    return(
        <>
        
        <Dataform addnewdata ={datacollect}/>
        <Studentarray item ={newdata}/>
        </>
          )
}

export default Studentdata