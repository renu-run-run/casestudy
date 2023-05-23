import React from 'react';
import {useEffect,useState} from 'react';
import HomeCard from './HomeCard';
import {Grid} from "@mui/material";
import Loading from './Loading';
import axios from 'axios';
//https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options%5bmood%5d%5b%5d=happy
const Home = () => {
    // const arr = [true, true, true, true, true, true,true, true, true, true];
    // const apifxn = async() =>{
    //   const data = await fetch('https://jsonplaceholder.typicode.com/users');
    //      console.log(data.data);
    // }
    // apifxn();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [deleted,setDeleted] = useState([]);
    

    useEffect(_=>{
      setTimeout( _ => setLoading(false), 1000);
    },[]);
     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
          
          setData(res.data);
          setDeleted(res.data);
        })
      
    },[])
    
    return(
        <>
        

         { loading ? <Loading /> :(<>
          
      

          <Grid  container m={5} style={{marginTop:"3rem"}} justifyContent="center" justify = "center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ flexGrow: 1 }} >
          {
            data.map((ele, _)=>{
              return(
              <>
              <Grid m={4} key={ele.id} >
              <HomeCard 
               data={data} setData={setData}
               name={ele.name} email={ele.email}
               phone={ele.phone} web={ele.website}
               key={ele.id}
               deleted={deleted}
               setDeleted={setDeleted}
               />
              </Grid>
              
              </>
              )
            })
          }
          </Grid>

          

          </>
          )}
           
        </>
      
    )
}

export default Home;