import { useState } from "react";
import ShowComments from "./comments";
export default function Comment() {
  let [formData, setformData] = useState({
    userName: "",
    remark: "",
    rating: "",
    isSubmit: false,
  });
  function updateFormState(event) {
    formData[event.target.name] = event.target.value;
    setformData({ ...formData });
  }
  function Submit(event) {
    event.preventDefault();
    setformData((prev) => {
      prev["isSubmit"] = true;
      return { ...prev };
    });
  }
  return (
    <>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="userName">Enter Ur userName : </label>
          <input
            id="userName"
            placeholder="Enter An userName"
            name="userName"
            value={formData.userName}
            onChange={updateFormState}
          ></input>
        </div>
        <div>
          <label htmlFor="remark">remark : </label>
          <textarea
            id="remark"
            placeholder="remark"
            name="remark"
            value={formData.remark}
            onChange={updateFormState}
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating">Give Rating! : </label>
          <input
            id="rating"
            type="number"
            min="1"
            max="5"
            name="rating"
            onChange={updateFormState}
          ></input>
        </div>
        <button>Submit</button>
      </form>
      <div>
        {" "}
        {formData.isSubmit ? (
          <ShowComments comment={formData}></ShowComments>
        ) : null}
      </div>
    </>
  );
}
