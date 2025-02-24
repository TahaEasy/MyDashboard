"use client";

import {
  LuCopy,
  LuCreditCard,
  LuDollarSign,
  LuSquareCheck,
} from "react-icons/lu";
import CountingCard from "../CountingCard";
import CountingChartCard from "../CountingChartCard";

const countingSmalls = [
  {
    title: "سفارشات",
    count: 201,
    Icon: LuCopy,
    percentage: 8.2,
  },
  {
    title: "تایید شده",
    count: 36,
    Icon: LuSquareCheck,
    percentage: 3.4,
  },
  {
    title: "کل ماه",
    count: 25410,
    Icon: LuDollarSign,
    percentage: -0.2,
  },
  {
    title: "درآمد",
    count: 1352,
    Icon: LuCreditCard,
    percentage: -1.2,
  },
];

const countingCharts = [
  {
    title: "کاربران",
    count: 4890,
    data: [
      { id: 1, value: 62, color: "#FFBC11", label: "جدید" },
      { id: 2, value: 26, color: "#FFDA7A", label: "بازگشتی" },
      { id: 3, value: 12, color: "#FBF3DF", label: "غیرفعال" },
    ],
  },
  {
    title: "دنبال کنندگان",
    count: 1201,
    data: [
      { id: 1, value: 70, color: "#3f75ff", label: "پولی" },
      { id: 2, value: 30, color: "#81a5ff", label: "آزمایشی" },
    ],
  },
];

const CountingsSection = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 min-h-72">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {countingSmalls.map((counting, i) => (
          <CountingCard key={i} counting={counting} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 h-full">
        {countingCharts.map((counting, i) => (
          <CountingChartCard key={i} counting={counting} />
        ))}
      </div>
    </div>
  );
};

export default CountingsSection;
