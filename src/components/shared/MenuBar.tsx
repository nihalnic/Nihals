import { Button } from "../ui/button";

const MenuBar = () => {
  return (
    <section className="menubar">
      <div className="flex justify-between items-center">
        <img
          src="/public/assets/images/logo.png"
          alt="Avatar"
          width={45}
          height={45}
          // className="rounded-full border-[3px] border-emerald-500 p-2 "
        />
        <div className="flex gap-3">
          <Button className="shad-button_primary rounded-[35px] gap-1">
            Menu
            <img 
              src="/assets/icons/down-arrow.svg"
              alt="menubar"
              width={22}
              height={22}
              className="invert-white"
            />
          </Button>
          <Button className="shad-button_primary rounded-[35px] px-[14px]">
            <img
              src="/assets/icons/dark-mood.svg"
              alt="dark-mood-toggle"
              className="invert-white"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
