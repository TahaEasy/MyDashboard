import LineChartCard from "@/app/_components/ui/dashboard/Projects/LineChartCard";
import PageHeader from "@/app/_components/ui/dashboard/PageHeader";
import DomainsCard from "@/app/_components/ui/dashboard/Projects/DomainsCard";
import ModalsSection from "@/app/_components/ui/dashboard/Projects/sections/ModalsSection";
import TableSection from "@/app/_components/ui/dashboard/Projects/sections/TableSection";

export const generateStaticParams = () => [{ project: "1" }, { project: "2" }];

const Page = ({ params }) => {
  return (
    <div>
      <ModalsSection />
      <div className="mb-4">
        <PageHeader title={`پروژه شماره ${params?.project}`} />
      </div>
      <div className="my-4">
        <div className="w-full grid grid-cols-2 gap-4">
          <div>
            <LineChartCard />
          </div>
          <div>
            <DomainsCard />
          </div>
        </div>
      </div>
      <div className="my-4">
        <TableSection />
      </div>
    </div>
  );
};

export default Page;
