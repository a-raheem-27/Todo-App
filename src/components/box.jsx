import React from 'react'
import Item from "./item"

const box = (props) => {

    const item = props.data.map(
        (singleData, index) => {
            return <Item removeHandler={props.removeHandler} key={index} id={index} item={singleData.item} time={singleData.time} />
        }
    )
  return (
    <div className='p-3 text-white' >
      {item}
    </div>
  )
}

export default box
