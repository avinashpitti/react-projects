import Student from "./Student";

function App(){
  return(
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="patricks" age={42} isStudent={false} />
      <Student name="squidward" age={50} isStudent={false}/>
      <Student name="Avinash" age={28} isStudent={true} />
    </>
  );
}

export default App