import { Avatar, AvatarFallback } from "@/Components/Atoms/avatar";
import { Button } from "@/Components/Atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/Atoms/card";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EmployeesStats() {
  const totalEmployees = 100;
  const employeesPresent = 80;

  const employeesPresentPercantage = (employeesPresent / totalEmployees) * 100;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base ">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base ">Employees present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {employeesPresentPercantage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}

              <div className="text-5xl font-bold">{employeesPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercantage > 75 ? (
              <span className="text-xs text-green-500 flex gap-1 items-center">
                <BadgeCheckIcon />
                {employeesPresentPercantage}% of employees are present
              </span>
            ) : (
              <span className="text-xs text-red-500 flex gap-1 items-center">
                <AlertTriangleIcon />
                Only {employeesPresentPercantage}% of employees are present
              </span>
            )}
          </CardFooter>
        </Card>

        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image
                src="/cm.jpg"
                alt="Employee of the month avatar"
                width={50}
                height={50}
              />
              <AvatarFallback>HK</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Hassan Khalil!</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congratulations, Hassan!</span>
          </CardFooter>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </>
  );
}
