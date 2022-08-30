import React from 'react'

const Login = ({setUserName}) => {
  return (
    <div>
        <input onChange={ (e) => {
            setUserName(e.target.value);
        }} />
    </div>
  )
}

export default Login