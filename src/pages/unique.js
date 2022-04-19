import { useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import { getUnique } from "../App";
import axios from "axios";


export default function App() {
    const {data2Id} = useParams();
    const [itemData, setItemData] = useState({})

    useEffect(
      async () => {    
          if(data2Id != null){
          console.log("params", data2Id);
          const url = "/data/" + data2Id;
          try{
  
              const response = await axios.get(url)
              const resData = response.data
              setItemData(resData)
          }catch(err){
              console.log("Err getting item data", err)
          }
          }
      }, [data2Id]
  );
    
    return (
      <main style={{ padding: "1rem" }}>
        <h1>{itemData.name}</h1>
        <p>Location - {itemData.location}</p>
        <p>Timing - {itemData.timing}</p>
    </main>
    );
  
}
