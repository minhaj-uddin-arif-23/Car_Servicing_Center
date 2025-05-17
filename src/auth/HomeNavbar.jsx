import { NavLink } from "react-router-dom";
export default function HomeNavbar() {
  return (
    <div>
      <div className="navbar  ">
        <div className="navbar-start">
     
          <NavLink to={"/"} className=" font-bold text-blue-700 text-3xl">
            CarCare
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end gap-3"></div>
      </div>
    </div>
  );
}
