import React from 'react'

function NursaryCard(props) {
  return (
    <div>
      <div className='nursaryCard-wrapper' style={{textAlign:"center",width:"320px",height:300}}>
        <img src={props.imag} style={{width:"290px",height:200}}/>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default NursaryCard
