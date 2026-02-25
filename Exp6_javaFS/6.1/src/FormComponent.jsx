import React, { useState } from "react";
import "./App.css";

function FormComponent() {
  const today = new Date();
  const todayFormatted = today.toLocaleDateString("en-CA");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    skills: [],
    address: "",
    state: "",
    age: ""
  });

  const skillOptions = ["Java", "Python", "React", "Node"];

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      const selectedDate = new Date(value);

      if (selectedDate >= today) {
        alert("Future date or today's date is not allowed");
        return;
      }

      const age = calculateAge(value);

      if (age <= 0) {
        alert("Age must be greater than 0");
        return;
      }

      setFormData({ ...formData, dob: value, age });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
`First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Gender: ${formData.gender}
DOB: ${formData.dob}
Age: ${formData.age}
Skills: ${formData.skills.join(", ")}
Address: ${formData.address}
State: ${formData.state}`
    );
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      skills: [],
      address: "",
      state: "",
      age: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2>Registration Form</h2>

      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
            required
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <div className="form-group">
        <label>DOB:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          max={todayFormatted}
          required
        />
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input type="number" value={formData.age} readOnly />
      </div>

      <div className="form-group">
        <label>Skills:</label>
        {skillOptions.map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              value={skill}
              checked={formData.skills.includes(skill)}
              onChange={handleSkillChange}
            />
            {skill}
          </label>
        ))}
      </div>

      <div className="form-group">
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          <option value="Haryana">Haryana</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>

      <div className="button-group">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default FormComponent;
