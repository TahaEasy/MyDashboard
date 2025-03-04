import { LuCheck, LuRadio } from "react-icons/lu";
import Button from "../../Button";
import Input from "../Input";

const CreateDomainForm = () => {
  return (
    <div>
      <div>
        <Input placeholder="نام دامنه..." Icon={LuRadio} />
      </div>
      <div className="my-4">
        <Button>
          ثبت دامنه
          <LuCheck />
        </Button>
      </div>
    </div>
  );
};

export default CreateDomainForm;
