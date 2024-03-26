import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function NavList() {
  const location = useLocation();
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 text-center lg:flex-row *:transition lg:p-1">
      <Typography variant="small" color="blue-gray" className="font-medium">
        <Link
          to="/"
          className={`flex items-center gap-2 py-2 px-4 ${
            location.pathname === "/" ?
            "border border-[#23BE0A] font-semibold rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white":"hover:bg-[#7876760f] hover:border-2 rounded-lg"
          }`}
        >
          Home
        </Link>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-medium">
        <Link
          to="/listed-book"
          className={`flex items-center gap-2 py-2 px-4 ${
            location.pathname === "/listed-book" ?
            "border border-[#23BE0A] font-semibold rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white":"hover:bg-[#7876760f] hover:border-2 rounded-lg"
          }`}
        >
          Listed Books
        </Link>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-medium">
        <Link
          to="/read-pages"
          className={`flex items-center gap-2 py-2 px-4 ${
            location.pathname === "/read-pages" ?
            "border border-[#23BE0A] font-semibold rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white":"hover:bg-[#7876760f] hover:border-2 rounded-lg"
          }`}
        >
          Pages to Read
        </Link>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-medium">
    <Link
      to="/new-releases"
      className={`flex items-center gap-2 py-2 px-4 ${
        location.pathname === "/new-releases" ?
        "border border-[#23BE0A] font-semibold rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white":"hover:bg-[#7876760f] hover:border-2 rounded-lg"
      }`}
    >
      New Releases
    </Link>
  </Typography>

    </List>
  );
}
const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <>
      <Navbar className="mx-auto max-w-7xl px-0 py-4 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer md:text-3xl py-1.5 lg:ml-2"
          >
            Book Vibe
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <button className="px-4 py-2 rounded-lg bg-[#23BE0A] text-white font-semibold">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#59C6D2] text-white font-semibold">
              Sign Up
            </button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <button className="px-4 py-2 rounded-lg bg-[#23BE0A] text-white font-semibold">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#59C6D2] text-white font-semibold">
              Sign Up
            </button>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
