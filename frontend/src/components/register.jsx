import { useState } from "react"

function Register()
{
    const [data,setdata]=useState({name:'',phone:'',mail:'',add:'',rgno:'',pass:''})
    const handleChange=(event)=>{
        const{id,value}=event.target;
        setdata({...data,[id]:value})
    }
    const getRegister=(event)=>{
        event.preventDefault()
        fetch("/api/user",{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(data)
        })
    }
    return <div className="register">
        <form className="flex flex-col gap-4 w-fit p-10 bg-gray-800 rounded-xl ">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-white">REGISTER</h1>
            <input type="text" id="name" value={data.name}
            className="rounded-xl bg-slate-700 text-white p-2"
            placeholder="Name" onChange={handleChange}/>

            <input type="text" id="phone" value={data.phone}
            className="rounded-xl bg-slate-700 text-white p-2"
            placeholder="Phone Number" onChange={handleChange}/>

            <input type="text" id="mail" value={data.mail}
            className="rounded-xl bg-slate-700 text-white p-2"
            placeholder="E-Mail" onChange={handleChange}/>

            <input type="text" id="add" value={data.add}
            className="rounded-xl bg-slate-700 text-white p-2"
            placeholder="Address" onChange={handleChange}/>

            <input type="password" id="pass" value={data.pass}
            className="rounded-xl bg-slate-700 text-white p-2"
            placeholder="Password" onChange={handleChange}/>

            <input type="text" id="rgno" value={data.rgno}
            className="rounded-xl bg-slate-700 text-white p-2"
            placeholder="Registration Number" onChange={handleChange}/>

            {/* <div className="flex flex-col rounded-xl p-2 text-slate-400 bg-slate-700 gap-2">
                <label>Certificate Of Registration</label>
                <input type="file"></input>
            </div> */}
            <button className="bg-blue-700 rounded-xl p-2 text-white m-4" onClick={getRegister}>REGISTER</button>
        </form>
    </div>
}
export default Register