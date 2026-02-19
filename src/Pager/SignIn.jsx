import Lottie from 'lottie-react';
import SignUplottie from '../assets/loti/Sign up.json'
import { use } from 'react';
import { Autchontex } from '../Contex/AuthContex';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/fitebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { Navigate, useLocation, useNavigate } from 'react-router';

const SignIn = () => {

    const {signInUser} =use(Autchontex)


    const location = useLocation()

    // console.log('signin',location);
    const navigat = useNavigate()
    const from =location.state || '/'
    

    const handalOnSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // sign in firebase
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            navigat(from)
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handalGoogleSihnIn = () =>{
        const provider = new GoogleAuthProvider()
        
        signInWithPopup(auth,provider)
        .then(result =>{
            console.log(result.user);
             navigat(from)
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={SignUplottie} loop={true}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">SignIn now!</h1>
                            <form onSubmit={handalOnSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4"><input type="submit" value="SignIn" /></button>
                                </fieldset>
                            </form>
                            <button onClick={handalGoogleSihnIn} className="btn btn-neutral mt-4">SignIn Width Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;