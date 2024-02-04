import { useEffect,useState } from "react";

function useCurrencyInfo(currencyInfo){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        .then((data)=> data.json())
        .then((data)=> setData(data))
       
    },[currencyInfo])
    console.log(data)
    return data;
}
export default useCurrencyInfo;