"use client";

import { BarChart } from "@mui/x-charts";
import Card from "../Card";
import Dropdown from "../Dropdown";
import { useState } from "react";
import { months, yearOptions } from "@/app/_lib/neededArrays";

const BarChartCard = () => {
  const [year, setYear] = useState(1403);

  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Header.StartSide>
            <Card.Title>میزان فروش</Card.Title>
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
          <BarChart
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
                data: months,
                scaleType: "band",
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
              },
            ]}
            colors={["#3f75ff"]}
            series={[
              {
                data: [
                  205_021, 148_436, 218_154, 181_240, 271_402, 194_325, 193_717,
                  58_458, 237_221, 251_154, 314_891, 379_451,
                ],
                valueFormatter: (value) => `${value?.toLocaleString()} نفر`,
              },
            ]}
            slotProps={{
              bar: {
                rx: 5,
                ry: 5,
              },
            }}
            borderRadius={20}
            height={300}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default BarChartCard;
