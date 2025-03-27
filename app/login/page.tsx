"use client"; // Ensure this is at the top for Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Use this instead of "next/router"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // ✅ This now works correctly

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // if (username === "user1" && password === "password1") {
    //   alert("Login successful!");
    //   router.push("/account"); // ✅ Redirect works now
    // } else {
    //   alert("Invalid credentials!");
    // }
    router.push("/account");
  };

  return (
    <div className="greeting">
      <div className="Signin">Signin to your PopX account</div>
      <div className="Lorem-login">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
      <form onSubmit={handleLogin}>
        <input
          className="input-email-set"
          type="text"
          placeholder="Enter email address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="input-password-set"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button-set" type="submit">Login</button>
      </form>
    </div>
  );
}
