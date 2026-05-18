"use client";

import { useRouter } from "next/navigation";

export default function AuthSuggestion(
  { feature }: { feature: string }
) {
  const router = useRouter();

  function handleLogin() {
    router.push("/login");
  }

  return (
    <div>
      <h1>Cannot Access {feature} without logging in</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}