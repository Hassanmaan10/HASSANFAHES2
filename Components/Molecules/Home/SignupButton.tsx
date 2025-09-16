"use client";

import Link from "next/link";
import { Button } from "../../Atoms/button";

export default function SignupButton() {
  return (
    <Button variant="outline" asChild>
      <Link href="/sign-up">Sign up</Link>
    </Button>
  );
}
