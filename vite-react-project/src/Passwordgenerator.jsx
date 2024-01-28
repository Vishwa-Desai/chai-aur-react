import React, { useEffect } from "react";
import { useState,useCallback,useRef } from "react";

export function PasswordGenerator(){
    const [length,setLength] = useState(8);
    const [numberAllowed,setNumberAllowed] = useState(false);
    const [characterAllowed,setCharacterAllowed] = useState(false);
    const [password,setPassword] = useState('');

    // useRef hook
    const passwordRef = useRef(null);
    const passwordGenerator = useCallback(() => {
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str += "0123456789"
        if(characterAllowed) str+= "!@#$%^&*()-_+=[]{}:;?~"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass)
    },[length,numberAllowed,characterAllowed,setPassword]);

    const copyPasswordToClipboard = useCallback(()=> {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,990)
        window.navigator.clipboard.writeText(password)
    },[password])
    useEffect(()=>{
        passwordGenerator()
    }
    ,[length,numberAllowed,characterAllowed,passwordGenerator])
    return(
        <>
            <div className="w-full mx-w-md mx-8 px-4 my-8 pt-2 pb-2 bg-gray-700 text-orange-500">
                <h3> Password Generator</h3>
            </div>
            <div className=" flex shadow rounded-lg overflow-hidden mb-4 ml-8">
                <input className="border-black outline-none py-1 px-3" type="text" value={password} readOnly ref={passwordRef}/>
                <button className="bg-blue-700 w-20 rounded-md"
                onClick={copyPasswordToClipboard}>Copy</button>
            </div>
            <div>
                <div className="ml-8">
                    <input type="range" name="" id="" value={length} min="6" max="100" onChange={(e) => {setLength(e.target.value)}}/>
                    <label >Length : {length}</label>
                </div>
                <div className="ml-8">
                    <input type="checkbox" name="" id="" defaultChecked={numberAllowed}
                    onChange={() => { setNumberAllowed((prev)=> !prev)}}/>
                    <label >Numbers </label>

                </div>
                <div className="ml-8">
                    <input type="checkbox" name="" id="" defaultChecked={characterAllowed}
                    onChange={() => { setCharacterAllowed((prev)=> !prev)}}/>
                    <label >characters </label>

                </div>
            </div>
        </>
    )
}   