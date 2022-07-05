import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])

  const fetchData = async() =>{
    const result =  await axios.get(`https://fakestoreapi.com/products`)
    console.log(result)
    setData(result)
  }

  useEffect(()=>{
      fetchData();
  },[])

  return (
    <div>
     {data.data.map((item,index)=>{
          return(
            <div style={{padding:"20px"}}>
            <div>
              id : {item.id}
            </div>
            <div>
              Title : {item.title}
            </div>
            <div>
              Category : {item.category}
            </div>
            <div>
              description : {item.description}
            </div>
            <div>
              price : {item.price}
            </div>
            <div>
              ratings : {item.rating.rate}
            </div>
            <img style={{height:"250px",width:"250px"}} src={item.image} alt="image" />
            <hr />
            </div>
          )
     })}
    </div>
  );
}

export default App;
