import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import{useState} from 'react'

function Container({data}) {
  const [displayData,setDisplayData]=useState(data)

  const onDrink=() =>{
    const newData=data.filter(data=>data.drink)
  setDisplayData(newData)
  }

  const onIced=() =>{
    const newData=data.filter(data=>data.type="Iced coffee")
  setDisplayData(newData)
  }

  const onHot=() =>{
    const newData=data.filter(data=>data.type="Hot coffee")
  setDisplayData(newData)
  }
 
  const onCake=() =>{
    const newData=data.filter(data=>data.cake)
  setDisplayData(newData)
  }
    return (
        <div className ="container">
          <Leftbar onDrink={onDrink} onCake={onCake}/>
          <Rightbar displayData={displayData}/> 
          <video autoPlay loop className="videobackground" src="Coffee - 44244.mp4"></video>
        </div>
    )
}

export default Container
