import React,{useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'
// firebase 7.19.1
function Login() {
    const history=useHistory();
    const [email,setMail]=useState('');
    const [password,setPassword]=useState('');
    const signIn = e =>{
        e.preventDefault();
        //firebase login here
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/')
            })
            .catch(error=>alert(error.message))
    }
    const register =e =>{
        e.preventDefault();
        //firebase regster acc
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //successfully created a new user with email and pass
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }
    return (
        
        <div className='Login'>
            <Link to='/'>
                <img className='Login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
            </Link>
            <div className="Login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setMail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type='Submit' onClick={signIn} className='Login__signInButton'>
                        Sign-in
                    </button>
                </form>
                <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='Login__registerButton'>Create your Amazon clone account</button>
            </div>
        </div>
        
    );
}

export default Login