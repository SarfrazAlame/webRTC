import { useEffect } from "react"

const Sender = () => {


  useEffect(()=>{
    const socker = new WebSocket('ws://localhost:8080')
    
  },[])
  return (
    <div>Sender</div>
  )
}

export default Sender