import './TalentForm.css';
import React, { useState } from 'react';

const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    talent: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.talent) {
      alert("Please select talent before submitting!");
      return;
    }

    console.log("Form Data Submitted: ", formData);

    setFormData({
      name: "",
      age: "",
      email: "",
      talent: ""
    });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Talent Form for PUPBC</h1>
        <p>Fill out the details below if you're interested</p>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="talent">Talent</label>
            <select
              id="talent"
              name="talent"
              value={formData.talent}
              onChange={handleChange}
              required
            >
              <option value="">
                Select your talent
              </option>
              <option value="Singing">Singing</option>
              <option value="Dancing">Dancing</option>
              <option value="Poetry">Poetry</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TalentForm;