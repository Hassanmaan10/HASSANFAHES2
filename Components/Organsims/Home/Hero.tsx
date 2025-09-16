import LoginButton from "@/Components/Molecules/Home/LoginButton";
import SignupButton from "@/Components/Molecules/Home/SignupButton";
import { PersonStandingIcon } from "lucide-react";

export default function Hero() {
  return (
    <>
      <h1 className="flex gap-2 items-center ">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Support me
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-2 items-center">
        <LoginButton />
        <small>or</small>
        <SignupButton />
      </div>
    </>
  );
}
