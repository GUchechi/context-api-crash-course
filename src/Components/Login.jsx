import React, { useContext } from 'react'
import { AppContext } from '../App'

const Login = () => {
    const { setUserName} = useContext(AppContext)
  return (
    <div>
        <input onChange={ (e) => {
            setUserName(e.target.value);
        }} />
    </div>
  )
}

export default Login