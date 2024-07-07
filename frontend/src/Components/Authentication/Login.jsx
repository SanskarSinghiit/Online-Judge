import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="Username">Username : </label>
        <input type="text" name="Username"/>
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password" />
      </form>
      {/* Login */}
    </div>
  )
}

export default Login
