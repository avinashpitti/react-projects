function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }

    else{
        return <h4>Please login to continue</h4>
    }
}

export default UserGreeting