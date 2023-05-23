import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import FormDialog from './FormDialog';
import {useState } from 'react';


// <Divider orientation="vertical" />
export default function HomeCard({setData,data,deleted,setDeleted,name , email, phone, web}) {
    
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    console.log(userName);
    
  // useEffect(()=>{
  //   const apifxn = async() =>{
  //       const img = await fetch(`https://avatars.dicebear.com/v2/avataaars/%7B%7B${name}%7D%7D.svg?options%5bmood%5d%5b%5d=happy`);
  //          console.log(img.url);
  //          setImg(img.url);
  //     }
  //     apifxn();
  // },[])

  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
        {
          userName ==="" ?  <img
          src={`https://avatars.dicebear.com/v2/avataaars/%7B%7B${name}%7D%7D.svg?options%5bmood%5d%5b%5d=happy`}
          srcSet={`https://avatars.dicebear.com/v2/avataaars/%7B%7B${name}%7D%7D.svg?options%5bmood%5d%5b%5d=happy`}
          loading="lazy"
          alt=""
          /> : <img
          src={`https://avatars.dicebear.com/v2/avataaars/%7B%7B${userName}%7D%7D.svg?options%5bmood%5d%5b%5d=happy`}
          srcSet={`https://avatars.dicebear.com/v2/avataaars/%7B%7B${userName}%7D%7D.svg?options%5bmood%5d%5b%5d=happy`}
          loading="lazy"
          alt=""
           />
        }
          
        </AspectRatio>
      </CardOverflow>
      
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        {userName ===""? name : userName}
      </Typography>

      <Typography level="body2" sx={{ mt: 0.5, mb: 1 }}>
       Email: {userEmail ===""? email : userEmail }
      </Typography>

      <Typography level="body2" sx={{ mt: 0.0, mb: 1 }}>
       Phone: {userPhone ===""? phone : userPhone}
      </Typography>

      <Typography level="body2" sx={{ mt: 0.0, mb: 1 }}>
       website: {web}
      </Typography>
      
      <Divider />
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
        }}
      >
       
        <FormDialog 
        setUserNamecb={setUserName} userNamedata={userName}
        setUserEmailcb={setUserEmail} userEmaildata={userEmail}
        setUserPhonecb={setUserPhone} userUserPhonedata={ userPhone}
        data={data} setData={setData}
        deleted={deleted}
        setDeleted={setDeleted}
        />
        
        
      </CardOverflow>
    </Card>
  );
}