import React from 'react'
const Movielist = (props) => {
  const component_style={
    display:'flex',
    flexDirection:'column',
    justifyContent:"spaceBetween",
    margin:50,
    backgroundColor:"orange",
    width:'600px',
    height:'300px'
}
  return (
    <div>
{
props.data.map((i)={
  return(
    <div style={component_style}>
    <p>{i.Title}</p>
    <img src={i.Poster}></img>
    </div>
  )
})
}
    </div>
  )
}

export default Movielist