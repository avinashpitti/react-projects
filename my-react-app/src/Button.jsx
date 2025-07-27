function Button(){
    const handleClick=()=>console.log("ouch!");

    const handleClick2=(name)=>console.log('${name} stop clicking me')

    return(
        <button onClick={()=>handleClick2("Bro")} className="avi">click me  </button>
    );
}

export default Button