import New from "./new"
const App=()=> {
  return (
    <> 
    <New  />
    <MyApp />
     <h1>hey React world</h1>
    <p>heyy this is a   the sum of number is {5+8} paragraph</p>
     </>
  );
  };      
 
const MyApp=()=>{
  return <h1>this is calling function </h1>
};
export default App;
