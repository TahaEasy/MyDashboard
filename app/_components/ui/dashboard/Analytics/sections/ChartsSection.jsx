import BarChartCard from "../BarChartCard";
import LineChartCard from "../LineChartCard";

const ChartsSection = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 min-h-72">
      <BarChartCard />
      <LineChartCard />
    </div>
  );
};

export default ChartsSection;
