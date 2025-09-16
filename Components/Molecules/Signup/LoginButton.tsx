"use client";

import { Button } from "@/Components/Atoms/button";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Button asChild variant="outline" size="sm">
      <Link href="/login">Login</Link>
    </Button>
  );
}
