import { LuCheck, LuKey } from "react-icons/lu";
import Button from "../../Button";
import Input from "../Input";
import FormsSelects from "./FormsSelects";

const CreateKeywordForm = () => {
  return (
    <div>
      <div>
        <Input placeholder="نام کیورد..." Icon={LuKey} />
      </div>
      <div>
        <FormsSelects />
      </div>
      <div className="my-4">
        <Button>
          ثبت کیورد
          <LuCheck />
        </Button>
      </div>
    </div>
  );
};

export default CreateKeywordForm;
