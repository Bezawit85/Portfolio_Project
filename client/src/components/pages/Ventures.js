import React, { useState } from "react";
import "./Registration.css";
import { TextField, Button, Stack } from "@mui/material";

export default function Ventures() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [Gpa, setGPA] = useState("");
  const [batch, setBatch] = useState("");
  
  function send(e, form) {
    fetch(form.action, { method: "post", body: new FormData(form) });
    console.log("sent post asynchronously (AJAX)");
    e.preventDefault();
  }

  return (
    <div class="login-page" id="form" className="form">
      <div class="form">
        <div class="login-header">
          <p className="headerc">Apply Here</p>
          <br />
          <p>Please enter your credentials to Apply</p>
          <br />
        </div>

        <React.Fragment>
          <form
            class="login-form"
            method="POST"
            action="http://localhost:8000/post"
            handleSubmit="send(event,this)"
          >
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="firstName"
                name="firstName"
                variant="outlined"
                color="secondary"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                minlength="5"
                required
              />
              <TextField
                type="lastName"
                name="lastName"
                variant="outlined"
                color="secondary"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="email"
                name="email"
                variant="outlined"
                color="secondary"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
                required
              />
              <TextField
                type="department"
                name="department"
                variant="outlined"
                color="secondary"
                label="Department"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                required
                fullWidth
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="Gpa"
                name="Gpa"
                variant="outlined"
                color="secondary"
                label="GPA"
                min="2"
                max="4"
                onChange={(e) => setGPA(e.target.value)}
                value={Gpa}
                fullWidth
                required
              />
              <TextField
                type="batch"
                name="batch"
                variant="outlined"
                color="secondary"
                label="Batch"
                onChange={(e) => setBatch(e.target.value)}
                value={batch}
                fullWidth
                required
              />
            </Stack>
            <TextField
              type="date"
              name="date"
              variant="outlined"
              color="secondary"
              label="Internship deadline"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <Button variant="outlined" color="secondary" type="submit">
              Register
            </Button>
          </form>
        </React.Fragment>
      </div>
    </div>
  );
}
