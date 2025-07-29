import React,{useState} from "react"
function MyComponent(){

   
    const [foods,setFoods]=useState(["Apple","Orange","Banana"]);

    function handleAddFood(){

    }

    function handleRemoveFood(){
        
    }
    

    return(
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food,index)=> <li></li>)}
            </ul>
        </div>
    );

}

export default MyComponent