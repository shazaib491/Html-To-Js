import { useState } from "react";
function App(){

    const [name,setName]=useState("");
    function submitForm(event){
        event.preventDefault();
        console.log("Hello Wolrd",name)
    }

    return <div>
        <form onSubmit={submitForm} >
            <input type="text"  onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name ...." />
            <button type="submit">Submit</button>
        </form>
        {name}
    </div>
}

export default App;