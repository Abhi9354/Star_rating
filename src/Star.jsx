import "./Star.css"
const Star = ({index,onClick,rating, length}) => {
    const run=()=>{
        onClick(index);
    }
  return (
      <>
      {index+1 <= rating ? (<p className='star'onClick={run} >&#x2B50;</p>):(<p className='star'onClick={run} >&#9734;</p>)}
      </>
  )
}

export default Star
