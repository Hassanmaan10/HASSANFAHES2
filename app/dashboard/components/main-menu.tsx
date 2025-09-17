import { Avatar, AvatarFallback } from "@/Components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import Link from "next/link";
import LightDarkToggle from "@/Components/Atoms/light-dark-toggle";

export default function MainMenu() {
  return (
    <div className="bg-muted overflow-auto p-4 flex flex-col">
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </div>
      <div className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            HK
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </div>
    </div>
  );
}
