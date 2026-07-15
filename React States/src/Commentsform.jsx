import { useState } from "react";
import { useFormik } from "formik";
export default function CommentForm({ addCommet }) {
  // Function For An form-Validations
  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "userName Cannot Be Empty!";
    }

    if (!values.remark) {
      errors.remark = "Must Give Remark!";
    }

    if (!values.rating) {
      errors.rating = "Rating is Required!";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      userName: "",
      remark: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      addCommet(values);
    },
  });

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="userName">Enter Ur userName : </label>
          <input
            id="userName"
            placeholder="Enter An userName"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
          ></input>
          {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
        </div>
        <div>
          <label htmlFor="remark">remark : </label>
          <textarea
            id="remark"
            placeholder="remark"
            name="remark"
            value={formik.values.remark}
            onChange={formik.handleChange}
          ></textarea>
          {formik.errors.remark ? <div>{formik.errors.remark}</div> : null}
        </div>
        <div>
          <label htmlFor="rating">Give Rating! : </label>
          <input
            id="rating"
            type="number"
            min="1"
            max="5"
            name="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
          ></input>
          {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
