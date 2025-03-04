import { LuCheck, LuKey } from "react-icons/lu";
import FormsSelects from "../Domains/FormsSelects";
import Input from "../Input";
import Button from "../../Button";

const EditKeywordForm = ({ keyword, className }) => {
  return (
    <div className={`${className}`}>
      <div>
        <FormsSelects />
      </div>
      <div className="my-4">
        <Button>
          ویرایش کیورد
          <LuCheck />
        </Button>
      </div>
    </div>
  );
};

export default EditKeywordForm;
