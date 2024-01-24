
import  TestPage  from "./pages/TestPage";

function App() {


  const clickHandler = (e)=>{
    console.log(e)
  }

  const style ={
      backgroundColor:"red"
  }

  return (
    // <MyAccordian/>
    // <Button variant="contained" onClick={clickHandler} style={style}>Outlined</Button>
    <TestPage/>
  )
}

export default App
