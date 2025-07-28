/**
 onchange event handler= In react, the onChange event handler is used to track changes in input fields like
 <input>,<text area>, <select> etc.
 event is the object automatically passed by react to the handler
 event.target.value gives the current value of the input field
 you can use this to update the state with useState.
 */




import MyComponent from "./MyComponent"

function App(){
  return(
  <>
    <MyComponent/>
  </>
  )
}

export default App