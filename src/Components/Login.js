import {React} from 'react'
import './Login.css';
import Netflix from './Netflix.jpg';
import {auth , provider} from './firebase';
import { actionTypes} from './Reducer';
import {useStateValue} from './StateProvider';


function Login() {
    const [state ,dispatch] = useStateValue();
    const login = ()=>{
        auth.signInWithPopup(provider).then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })

            
        }).catch(error=>alert(error.message));
    };
    return (
        <div style={{background: `url(${Netflix})`}} className='login'>
            <div className='login_top'>
                <img className='netflix-logo'
                src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="Netflix-logo"/>
                <button onClick={login} className='login_button'>Login</button>
            </div>
            <div className='login_body'/>
            <div className='login_page'>
               <>
                <h1>Unlimited Films, Web Series and Tv Programmes.</h1>
                <h2>Watch Anywhere @ Anytime with Anyone!</h2>
               </> 
            </div>
        </div>
    )
}

export default Login
