import React from "react";
import { useFormik } from "formik";

const Form = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      last: "",
      program: "",
      degree: "",
      birthday: "",
      start: "",
      future_process: "false",
      comments: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <>
      <h1>Alan's University</h1>
      <h2>We want your talent. Come join our excellency programs!</h2>
      <h3>First step: fill the survey below</h3>
      <form
        style={{
          margin: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 8,
        }}
        onSubmit={handleSubmit}
      >
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label style={{ marginRight: 8 }} htmlFor="name">
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label style={{ marginRight: 8 }} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label style={{ marginRight: 8 }} htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label style={{ marginRight: 8 }} htmlFor="birthday">
            Date of birth:
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={values.birthday}
            onChange={handleChange}
          />
          <br />
          <br />
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label style={{ marginRight: 8 }} htmlFor="program">
            Program of interest:
          </label>
          <select
            id="program"
            name="program"
            value={values.program}
            onChange={handleChange}
          >
            <option>Select an option</option>
            <option value="computer science">Computer Science</option>
            <option value="mathematics">Mathematics</option>
            <option value="environmental sciences">
              Environmental Sciences
            </option>
            <option value="urban planning">Urban Planning</option>
            <option value="softwer engineering">Software engineering</option>
          </select>
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label style={{ marginRight: 8 }} htmlFor="last">
            Years after last completed degree:
          </label>
          <input
            type="number"
            id="last"
            name="last"
            value={values.last}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label style={{ marginRight: 8 }} htmlFor="degree">
            Highest degree:
          </label>
          <select
            id="degree"
            name="degree"
            value={values.degree}
            onChange={handleChange}
          >
            <option>Select an option</option>
            <option value="u bachelor">Uncompleted Bachelor</option>
            <option value="bachelor">Bachelor</option>
            <option value="u master">Uncompleted Master</option>
            <option value="master">Master</option>
            <option value="u phd">Uncompleted PhD</option>
            <option value="phd">PhD</option>
            <option value="none">None of the above</option>
          </select>
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label style={{ marginRight: 8 }} htmlFor="degree"></label>
          <input
            type="radio"
            id="january"
            name="start"
            value="january"
            onChange={handleChange}
          />
          <label htmlFor="january">January</label>
          <br />

          <input
            type="radio"
            id="may"
            name="start"
            value="may"
            onChange={handleChange}
          />
          <label htmlFor="may">May</label>
          <br />

          <input
            type="radio"
            id="september"
            name="start"
            value="september"
            onChange={handleChange}
          />
          <label htmlFor="september">September</label>
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label htmlFor="future_process">
            <input
              type="checkbox"
              id="future_process"
              value={values.future_process}
              onChange={handleChange}
            />
            Do you want to be informed about future selection processes?
          </label>
        </fieldset>
        <fieldset style={{ border: "none", marginRight: "8px" }}>
          <label htmlFor="'comments">
            Please let us know your thoughts about this survey!
          </label>
          <textarea
            name="comments"
            id="comments"
            value={values.comments}
            onChange={handleChange}
          ></textarea>
        </fieldset>
        <button type="submit">Submit </button>
      </form>
    </>
  );
};

export default Form;
