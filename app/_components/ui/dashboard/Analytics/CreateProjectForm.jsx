import { LuCheck, LuClipboardList } from "react-icons/lu";
import Input from "../Input";
import Button from "../../Button";

const CreateProjectForm = () => {
  return (
    <div>
      <div>
        <Input placeholder="نام پروژه..." Icon={LuClipboardList} />
      </div>
      <div className="my-4">
        <Button>
          ثبت پروژه
          <LuCheck />
        </Button>
      </div>
    </div>
  );
};

export default CreateProjectForm;
