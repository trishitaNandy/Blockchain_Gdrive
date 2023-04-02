import {useState} from 'react';
import './Display.css'
const Display=({contract,account})=>{
    const [data,setData]=useState("")
    const getdata=async()=>{
        let dataArray;
        const Otheraddress=document.querySelector(".address").value;
        if(Otheraddress){
            dataArray=await contract.display(Otheraddress);
            console.log(dataArray);
        }else{
            dataArray=await contract.display(account);
        }
        const isEmpty= Object.keys(dataArray).length===0;
        if(!isEmpty){
            const str=dataArray.toString();
            const str_array=str.split(",");
            console.log(str);
            console.log(str_array);
        }else{
            alert("No image to display");
        }
    };
    return(<>
    <div className='image-list'>Image Display</div>
    <input type="text" placeholder='Enter Address' className='address'></input>
    <button className='center button' onClick={getdata}>Get Data</button>
    </>);
};
export default Display;