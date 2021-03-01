import React from "react";

    function Form({setInputText, todos, setTodos, inputText}){

    const inputTextHandler = (e) =>{
     setInputText(e.target.value)       
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, 
            {   
                text: inputText, 
                completed:false, 
                id:Math.random()*1000 
            }
        ]);
        setInputText('');
    };

    return(
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} placeholder='Item' className="inputHolder"></input>
                <button onClick={submitTodoHandler} className="addMore">+</button>
            </form>
        </div>
    );
}

export default Form;

