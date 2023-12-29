import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { navLinks } from "@/constants";

const NavBar = () => {
  return (
    <section className="hidden md:block common-container sticky top-0 z-50 bg-transparent w-full">
      <div className="flex justify-between items-center">
        <Link to={'/'}>
          <img
            src="/assets/images/logo.png"
            alt="Avatar"
            width={45}
            height={45}
            // className="rounded-full border-[3px] border-teal-500 p-2 "
          />
        </Link>
        <div className=" bg-zinc-800 px-4 py-3 shadow-inner rounded-3xl">
          <nav>
            <ul className="flex gap-6 justify-between text-[14px] font-light">
              {navLinks.map((link, index) => (
                <li key={index} className=" hover:text-teal-400">
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Button className="shad-button_primary rounded-[35px] px-[14px]">
          <img
            src="/assets/icons/dark-mood.svg"
            alt="dark-mood-toggle"
            className="invert-white"
          />
        </Button>
      </div>
    </section>
  );
};

export default NavBar;
