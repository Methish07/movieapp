import React from 'react'
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Home = () => {
    const api_key='ce09cd7a'
    const [S_name, setS_name] = useState('');
    const [year, setyear] = useState();
    const [list,setlist]=useState([])

    const handleSubmit=()=>{
      fetch(`https://www.omdbapi.com/?s='star wars'&apikey=${api_key}`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log(res)
            setlist(res.Search)
            console.log("the list is",list)
        setS_name('')
        setyear('')

    })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <TextField
              id=""
              label=""
              value={S_name}
              onChange={(e)=>{ setS_name(e.target.value)}}
              fullWidth
            />
            <Button variant="contained" color="primary" type='submit'>
              Search
            </Button>
        </form>
    </div>
  )
}

export default Home