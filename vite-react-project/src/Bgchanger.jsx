import React from "react";
import { useState } from "react";
export function Bgchanger(){
    
    const [color,setColor] = useState("black");
    return(
        <>
         <div className="w-full h-full" style={{backgroundColor: color}}>
            <button className="w-40 p-2.5 rounded-md" style={{backgroundColor: "red"}} onClick={()=> setColor('red')}>Red</button><br/>
            <button className="w-40 mt-10 p-2.5 rounded-md" style={{backgroundColor: "green"}} onClick={()=> setColor('green')}>Green</button><br />
            <button className="w-40 mt-10 p-2.5 rounded-md" style={{backgroundColor: "blue"}} onClick={()=> setColor('blue')}>Sky Blue</button><br />
            <button className="w-40 mt-10 p-2.5 rounded-md" style={{backgroundColor: "purple"}} onClick={()=> setColor('purple')}>Purple</button><br />
            <button className="w-40 mt-10 p-2.5 rounded-md" style={{backgroundColor: "pink"}} onClick={()=> setColor('pink')}>Pink</button><br />
         </div>
        </>
    )
}