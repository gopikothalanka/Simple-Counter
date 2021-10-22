import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import './Counter.css';
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Counter</h1>
      <Card className="counterCard">
        <h1 className="num">{count}</h1>
        <Button variant="success" onClick={()=>setCount(count+1)} className="btn">+</Button>
         <Button variant="danger" onClick={()=>setCount(count-1)} className="btn" >-</Button> 
      </Card>
    </div>
  )
}

export default Counter
