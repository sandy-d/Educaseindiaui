"use client";
import { useRouter } from "next/navigation"; // ✅ Use this instead of "next/router"

import { useState } from "react";

export default function CreateAccount() {
    const router = useRouter(); // ✅ This now works correctly
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Account Created Successfully!");
    router.push("/account");

  };

  return (
    <div className="greeting">
      <div className="create-account-wer">Create your PopX account</div>
      <form onSubmit={handleSubmit}>
        <input className="full-name-set" type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input className="phone-number-wer" type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        <input className="email-wer" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input className="password-wer" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input className="companyname-wer" type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />

        <div className="radio-group-wer" >
          <label>Are you an Agency?</label>
          <label>
            <input type="radio" name="isAgency" value="Yes" checked={formData.isAgency === "Yes"} onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="isAgency" value="No" checked={formData.isAgency === "No"} onChange={handleChange} /> No
          </label>
        </div>

        <button className="create-account-werr" type="submit">Create Account</button>
      </form>
    </div>
  );
}
