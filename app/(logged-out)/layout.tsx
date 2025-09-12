import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <div className="flex gap-4 flex-col min-h-screen items-center p-24 justify-center">
      {children}
      <Button />
    </div>
  );
}
