import React from 'react'

const Firstcom = ({data, fn}) => {
  return (
    <div>
      <button onClick={() => {fn(10)}}>Set 10</button>
      {data}
    </div>
  )
}

export default Firstcom