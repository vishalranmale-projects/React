import { useState } from "react";
export default function form() {
  let [formData, setformData] = useState({
    userName: "",
    password: "",
  });
  function updateFormData(event) {
    setformData((prev) => {
      prev[event.target.name] = event.target.value;
      return { ...prev };
    });
  }
  function Submit(event) {
    event.preventdefault();
    setformData({ userName: "", password: "" });
  }
  console.log(formData);
  return (
    <>
      <form>
        <label htmlFor="username">Enter Your Username! : </label>
        <input
          id="username"
          type="text"
          placeholder="Enter Your Username!"
          onChange={updateFormData}
          value={formData.userName}
          name="userName"
        ></input>
        <label htmlFor="password">Enter password : </label>
        <input
          id="password"
          type="password"
          placeholder="Enetr Your Password"
          onChange={updateFormData}
          name="password"
          value={formData.password}
        ></input>
        <button onSubmit={Submit}>Submit!</button>
      </form>
    </>
  );
}
