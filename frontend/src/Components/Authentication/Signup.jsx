import React from "react";

const Signup = () => {
  return (
    <div>
      <form>
        <label htmlFor="Email">Email : </label>
        <input type="text" name="Email" />
        <label htmlFor="Username">Username : </label>
        <input type="text" name="Username" />
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password" />
      </form>
      {/* Signup */}
    </div>
  );
};

export default Signup;
