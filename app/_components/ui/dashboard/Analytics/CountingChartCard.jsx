import Card from "../Card";
import { PieChart } from "@mui/x-charts/PieChart";

const CountingChartCard = ({ counting: { title, count, data } }) => {
  return (
    <div className="h-full">
      <Card>
        <Card.Header>
          <Card.Header.StartSide>
            <Card.Title>{title}</Card.Title>
          </Card.Header.StartSide>
        </Card.Header>
        <Card.Count>{count}</Card.Count>
        <Card.CountDesc>از ماه گذشته</Card.CountDesc>
        <Card.Body>
          <div className="flex justify-center items-center w-full h-full">
            <PieChart
              series={[
                {
                  data,
                  valueFormatter: (value) => `${value.value}%`,
                  innerRadius: 60,
                  outerRadius: 100,
                  paddingAngle: 3,
                  cornerRadius: 5,
                  cx: 230,
                  cy: 80,
                },
              ]}
              slotProps={{
                legend: {
                  direction: "column",
                  position: { vertical: "middle", horizontal: "left" },
                  itemMarkWidth: 20,
                  itemMarkHeight: 10,
                  labelStyle: {
                    fill: "hsl(var(--twc-text))",
                    fontFamily: "'Rubik', 'Rubik Fallback'",
                    fontStyle: "normal",
                    direction: "ltr",
                    transition: "all 200ms cubic-bezier(0.4, 0, 1, 1)",
                  },
                  markGap: 5,
                },
                // popper: {
                //   sx: {
                //     "& .MuiChartsTooltip-root": {
                //       backgroundColor: "hsl(var(--twc-dash-back))",
                //       padding: 4,
                //       borderRadius: 4,
                //       "& .MuiTypography-root": {
                //         fontFamily: '"Rubik", "Rubik Fallback"',
                //         fontStyle: "normal",
                //         fill: "hsl(var(--twc-text)) !important",
                //       },
                //     },
                //   },
                // },
              }}
              width={350}
              height={160}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountingChartCard;
