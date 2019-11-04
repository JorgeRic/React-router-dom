import React from 'react'

function Detail(props) {
  console.log(props.match.params.id)
  return (
    <div>
      <h1>Detail page</h1>
    </div>
  )
}
export default Detail