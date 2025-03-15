import Btn from "./Btn";
const Buttons = ({buttons, handleonclick})=>{
return <>
  <div  className="btn">
 {buttons.map((btn, index)=>{
   return <Btn key={index} btn={btn} handleonclick={handleonclick}></Btn>
 })}
 </div>
</>
}
export default Buttons;