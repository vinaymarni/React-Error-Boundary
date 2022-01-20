import React, { useState } from "react";
import './counter.css'

const max_count = 5;

const Counter =()=>{
    const [counter, setCounter] = useState(0)
            const handleClick1 = () => {
                try{
                    if(counter === max_count){
                        throw new Error("Count limit exceeded");
                    }else{
                        setCounter(counter + 1)
                    }
                }catch(e){
                    console.log("Clickcounter error", e)
                }
            };

            const handleClick2 = () => {
                setCounter(counter - 1)
            }

            return (

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '300%',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '-15%',
                marginTop: 60,
                }}>
               
                    <h1 className="heading">Counter App</h1>
                    <div style={{
                    fontSize: '120%',
                    position: 'relative',
                    top: '10vh',
                    }}>
                    {counter}
                    </div>
                    
                    <div className="buttons">

                    <button style={{
                        fontSize: '60%',
                        position: 'relative',
                        top: '20vh',
                        marginRight: '5px',
                        backgroundColor: 'green',
                        borderRadius: '8%',
                        color: 'white',
                        }}
                    onClick={handleClick1}>Increment</button>

                    <button style={{
                        fontSize: '60%',
                        position: 'relative',
                        top: '20vh',
                        marginLeft: '5px',
                        backgroundColor: 'red',
                        borderRadius: '8%',
                        color: 'white',
                        }}
                        onClick={handleClick2}>Decrement</button>
                    </div>
               
                </div>

            )
}

export default Counter;