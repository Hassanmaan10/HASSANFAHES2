"use client";

import { Button } from "@/Components/Atoms/button";
import Link from "next/link";

export default function SignupButton() {
  return (
    <Button asChild variant="outline" size="sm">
      <Link href="/sign-up">Sign up</Link>
    </Button>
  );
}
