import React,{ useState,useEffect } from 'react';
import './login.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert'
function Login(){
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    function validate(event){
        event.preventDefault();
        if(username=="AYUSH" && password=="ayush"){
            swal("Login Successful",'Welcome to the website 😊','success')
        }
        else{
            swal("Invalid Details",'Ohh! Please try again with valid details 😭','error')
        }
    }
    return <div>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
            <h2>User Authentication</h2>
                <form onSubmit={validate}>
                    <input type='text' placeholder='username' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                    <input type='password' placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="submit" className='btn btn-primary'/>
                </form>
            </div>
        </div>
    </div>
}
export default Login

