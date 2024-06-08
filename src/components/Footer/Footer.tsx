import s from "./styles.module.scss";
import logo from "../../assets/logo.png";
import cn from "classnames";

const Footer = () => {
  return (
    <footer className={cn("rounded-lg shadow  m-4", s.foot)}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 cent">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              GGNTU
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 text-white" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-white">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            GGNTU{" "}
          </a>{" "}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
