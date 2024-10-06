import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const ToggleMenu = () => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
      <span className="p-2 hover:bg-blue-100 rounded-md lg:hidden flex">
      <HiOutlineMenuAlt4 className="size-6 " />
        </span>
      </PopoverTrigger>

      <PopoverContent>
        <div className="px-1 py-2">
          <h3 className="text-small font-bold">Popover Content</h3>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ToggleMenu;
