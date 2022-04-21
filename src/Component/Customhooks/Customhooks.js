import { useEffect, useState } from "react";

export const useServicesData = () => {
    
const [services, setServives] = useState([]);
const [loding, setLoding] = useState(true);

useEffect( ()=>{
    fetch("https://raw.githubusercontent.com/tanvirgithub21/ass-10-data/gh-pages/services.json")
    .then(data => data.json())
    .then(response => setServives(response))
    setLoding(false)
},[])

    return [services, setServives, loding]
}