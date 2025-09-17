import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/Components/Atoms/tabs";
import EmployeesStats from "./components/employees-stats";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <div className="flex flex-row">
        <TabsList className="mb-4">
          <TabsTrigger value="employees">Employees stats</TabsTrigger>
        </TabsList>
        <TabsList>
          <TabsTrigger value="teams">Teams stats</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">team stats view</TabsContent>
    </Tabs>
  );
}
