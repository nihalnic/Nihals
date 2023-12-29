import { footerLinks } from "@/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <span className="w-full h-[1px] bg-zinc-700 block"></span>
      <div className="md:flex md:justify-between items-center justify-center pt-8 pb-16">
        <div>
          <ul className="flex gap-6 text-[14px] font-light">
            {footerLinks.map((link, index) => (
              <li key={index} className=" hover:text-teal-400">
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="subtle-light opacity-50">© 2023 Nihal Nic. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
