"use client";
import React from "react";
import { Button } from "../../Atoms/button";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Button asChild>
      <Link href="/login">Log in</Link>
    </Button>
  );
}
