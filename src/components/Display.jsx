const Display = ({start})=>{
return <>
   <textarea type='text'
    readOnly className='inputbox'
     placeholder="Hello Guys... Give me some calculation 😎"
     value={start}>
    </textarea>
</>
}
export default Display;