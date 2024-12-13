import { Link, useLocation } from "react-router";
import { Bars3Icon } from "@heroicons/react/24/solid";

const base_url = import.meta.env.VITE_BASE_URL;

const navigation = [
  { name: "HOME", href: base_url },
  { name: "OUR SERVICES", href: `${base_url}our-services` },
  { name: "ABOUT US", href: `${base_url}about-us` },
  { name: "CONTACT US", href: `${base_url}contact-us` },
];

function Nav() {
  const location = useLocation();
  const urlPath = location.pathname;

  return (
    <nav className="h-full px-5 lg:px-10">
      <div className="flex justify-between items-center h-full">
        <Link to={base_url}>
          <div className="h-14 w-20 bg-orange-500 rounded-lg flex_center text-white font-bold">
            LOGO
          </div>
          <span className="sr-only">logo</span>
        </Link>
        <div className="hidden md:flex gap-10 font-medium">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`hover:text-orange-700 ${
                urlPath == item.href ? "text-orange-500" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <button>
            <Bars3Icon aria-hidden="true" className="size-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
