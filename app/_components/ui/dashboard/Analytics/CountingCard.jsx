import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import Card from "../Card";

const CountingCard = ({ counting: { percentage, title, Icon, count } }) => {
  const absPercentage = Math.abs(percentage);

  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Header.StartSide>
            <Card.Title>{title}</Card.Title>
          </Card.Header.StartSide>
          <Card.Header.EndSide>
            <Icon className="text-text w-6 h-6 transition-all duration-200" />
          </Card.Header.EndSide>
        </Card.Header>
        <Card.Count>{count}</Card.Count>
        <Card.CountDesc>
          {percentage === 0 ?? `${absPercentage}%`}
          {percentage > 0 ? (
            <>
              <span className="flex justify-start items-center gap-1 text-green-600">
                <LuArrowUp /> {absPercentage}%
              </span>
              از ماه گذشته
            </>
          ) : (
            <>
              <span className="flex justify-start items-center gap-1 text-red-600">
                <LuArrowDown /> {absPercentage}%
              </span>
              از ماه گذشته
            </>
          )}
        </Card.CountDesc>
      </Card>
    </div>
  );
};

export default CountingCard;
