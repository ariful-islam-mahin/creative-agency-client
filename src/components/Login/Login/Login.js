import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import agencyLogo from '../../../images/logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [loggedInUser, setLoggedInUser, serviceData, setServiceData, isAdmin, setIsAdmin] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: `/${isAdmin ? "adminOrderList" : "order"}` } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function (result) {
          const { displayName, email, photoURL } = result.user;
          const signedInUser = { name: displayName, email:email, img:photoURL }
          setLoggedInUser(signedInUser);
          storeAuthToken();
          if(result){
            alert('user logged in successfully')
          }
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    
      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(idToken => {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          })
          .catch(error => {
            console.log(error)
          });
      }

    return (
        <div className="text-center">
            <img className="my-5" style={{width:'150px'}} src={agencyLogo} alt=""/>
            <div style={{width:'400px'}} className=' mx-auto text-center p-5 border border-secondary rounded mt-5 bg-white'>
                <h4 className='font-weight-bold'>Login With</h4>
                <button onClick={handleGoogleSignIn} className='border rounded-pill mt-4 row d-flex justify-content-between align-items-center py-2 btn'>
                    <img className='w-100 col-2 pl-0' src="https://i.ibb.co/pZbCcqY/1004px-Google-G-Logo-svg.png" alt=""/>
                    <h6 className="col-10 m-0">Continue with Google</h6>
                </button>
            </div>
        </div>
    );
};

export default Login;