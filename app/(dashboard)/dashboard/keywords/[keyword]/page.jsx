import KeywordDetail from "@/app/_components/ui/dashboard/Keywords/KeywordDetail";
import LineChartCard from "@/app/_components/ui/dashboard/Keywords/LineChartCard";
import ModalsSection from "@/app/_components/ui/dashboard/Keywords/sections/ModalsSection";
import PageHeader from "@/app/_components/ui/dashboard/PageHeader";
import { keywords } from "@/app/_lib/neededArrays";

export const generateStaticParams = () => {
  const newKeywords = keywords.map(({ id }) => ({ keyword: id }));

  return newKeywords;
};

const Page = ({ params }) => {
  const keyword = keywords.find((item) => item.id === params.keyword);

  return (
    <div>
      <ModalsSection keyword={keyword} />
      <div className="mb-4">
        <PageHeader title={`کیورد شماره ${keyword.id}`} />
      </div>
      <div className="my-4">
        <div className="w-full grid grid-cols-2 gap-4">
          <div>
            <LineChartCard />
          </div>
          <div>
            <KeywordDetail keyword={keyword} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
