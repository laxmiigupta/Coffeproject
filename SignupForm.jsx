import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Username
    if (!formData.username.trim()) {
      errors.push("Username is required.");
    }

    // Validate Email
    if (!formData.email.trim()) {
      errors.push("Email is required.");
    } else if (!emailRegex.test(formData.email)) {
      errors.push("Email is not valid.");
    }

    // Validate Password
    if (!formData.password) {
      errors.push("Password is required.");
    } else if (formData.password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }

    // Validate Confirm Password
    if (!formData.confirmPassword) {
      errors.push("Confirm password is required.");
    } else if (formData.password !== formData.confirmPassword) {
      errors.push("Passwords do not match.");
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => toast.error(error));
    } else {
      toast.success("Signup successful!");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Signup</h2>
      <Form onSubmit={handleSubmit}>
        {/* Username Field */}
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Email Field */}
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Password Field */}
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Confirm Password Field */}
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Submit Button */}
        <Button type="submit" color="primary" block>
          Signup
        </Button>
      </Form>
      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
}
