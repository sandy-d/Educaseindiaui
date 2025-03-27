"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="greeting">
      <div className="welcome">Welcome to PopX</div>
      <div className="Lorem_first">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
      <button className="custom-button-create-Account" onClick={() => router.push("/create")}>Create Account</button>
      <button className="custom-button-already" onClick={() => router.push("/login")}>Already Registered? Login</button>
    </div>
  );
}
