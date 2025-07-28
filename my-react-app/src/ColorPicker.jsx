import React, {useState} from "react";

function ColorPicker(){

    const[color,setColor]=useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>color picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                    <p>Selected color : {color}</p>

            </div>
            <label htmlFor="">Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} /> {/* default is black*/}

        </div>
    );
}

export default ColorPicker