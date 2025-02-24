import ChartsSection from "@/app/_components/ui/dashboard/Analytics/sections/ChartsSection";
import CountingsSection from "@/app/_components/ui/dashboard/Analytics/sections/CountingsSection";
import TableSection from "@/app/_components/ui/dashboard/Analytics/sections/TableSection";
import PageHeader from "@/app/_components/ui/dashboard/PageHeader";

const Page = () => {
  return (
    <div>
      <div className="mb-4">
        <PageHeader />
      </div>
      <div className="my-4">
        <CountingsSection />
      </div>
      <div className="my-4">
        <ChartsSection />
      </div>
      <div className="my-4">
        <TableSection />
      </div>
    </div>
  );
};

export default Page;
