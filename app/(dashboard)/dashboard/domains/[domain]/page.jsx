import LineChartCard from "@/app/_components/ui/dashboard/Domains/LineChartCard";
import PageHeader from "@/app/_components/ui/dashboard/PageHeader";
import ModalsSection from "@/app/_components/ui/dashboard/Domains/sections/ModalsSection";
import KeywordsCard from "@/app/_components/ui/dashboard/Domains/KeywordsCard";
import TableSection from "@/app/_components/ui/dashboard/Domains/sections/TableSection";

export const generateStaticParams = () => [
  { domain: "1" },
  { domain: "2" },
  { domain: "3" },
  { domain: "4" },
];

const Page = ({ params }) => {
  return (
    <div>
      <ModalsSection />
      <div className="mb-4">
        <PageHeader title={`دامنه شماره ${params?.domain}`} />
      </div>
      <div className="my-4">
        <div className="w-full grid grid-cols-2 gap-4">
          <div>
            <LineChartCard />
          </div>
          <div>
            <KeywordsCard />
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
