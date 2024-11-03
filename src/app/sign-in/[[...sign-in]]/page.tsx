import { SignIn } from "@clerk/nextjs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}
