import React from 'react';
import { GoogleLogin } from 'react-google-login';
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function GoogleLoginButton() {
  const onGoogleSuccess = (response : any) => {
    console.log('Google Login Success:', response);
    // handle Google login success, demo
  };

  const onGoogleFailure = (response: any) => {
    console.log('Google Login Failed:', response);
    // handle Google login failure, demo
  };

  if(!googleClientId) return <></>
  return (
    <div >
      <GoogleLogin
        clientId={googleClientId}
        buttonText="Google"
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleLoginButton;
