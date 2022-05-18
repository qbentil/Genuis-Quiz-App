import React from 'react'

const Select = ({options, action}) => {
    const change = (event) => {
        action(event.target.value);
        console.log(event.target.value);
    }
  return (
    <div>
        <select className="btn" onChange={(e) => change(e)} >
            <option value={null} selected disabled>Select Category</option>
            {
                options.map((op, index) => (
                    <option value={op.id} key={index}>{op.title}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Select