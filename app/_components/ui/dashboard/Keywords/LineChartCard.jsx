"use client";

import { LineChart } from "@mui/x-charts";
import Card from "../Card";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { months, yearOptions } from "@/app/_lib/neededArrays";

const LineChartCard = () => {
  const [year, setYear] = useState(1403);

  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Header.StartSide>
            <Card.Title>میانگین کیورد</Card.Title>
          </Card.Header.StartSide>
          <Card.Header.EndSide>
            <Dropdown
              value={year}
              setValue={setYear}
              className="block text-center w-11"
            >
              {yearOptions.map(({ value, placeholder }, i) => (
                <Dropdown.Option key={i} value={value}>
                  {placeholder}
                </Dropdown.Option>
              ))}
            </Dropdown>
          </Card.Header.EndSide>
        </Card.Header>
        <Card.Body>
          <LineChart
            yAxis={[
              {
                valueFormatter: (num) =>
                  num >= 100000 ? `${num / 1000}k` : num,
                disableLine: true,
                disableTicks: true,
                tickLabelStyle: {
                  fill: "hsl(var(--twc-text))",
                  fontFamily: "'Rubik', 'Rubik Fallback'",
                  fontStyle: "normal",
                  direction: "ltr",
                  transition: "all 200ms cubic-bezier(0.4, 0, 1, 1)",
                },
              },
            ]}
            xAxis={[
              {
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                dataKey: "month",
                disableLine: true,
                disableTicks: true,
                categoryGapRatio: 0.7,
                tickLabelStyle: {
                  angle: 45,
                  textAnchor: "start",
                  fill: "hsl(var(--twc-text))",
                  fontFamily: "'Rubik', 'Rubik Fallback'",
                  fontStyle: "normal",
                  direction: "ltr",
                  overflow: "visible",
                  fontSize: 12,
                  transition: "all 200ms cubic-bezier(0.4, 0, 1, 1)",
                },
                valueFormatter: (value) => `${months[value]}`,
              },
            ]}
            series={[
              {
                data: [
                  180000, 250000, 350000, 100000, 200000, 70000, 150000, 100000,
                  70000, 300000, 135455, 275689,
                ],
                showMark: false,
              },
            ]}
            colors={["#cb3eff"]}
            height={300}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default LineChartCard;
