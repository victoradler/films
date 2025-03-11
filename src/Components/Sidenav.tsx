import inicio from "../assets/icons/resumo.svg";
import resumo from "../assets/icons/resumo_.svg";
import sair from "../assets/icons/sair.svg";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/chewbacca.svg";
import { useLogout } from "../Hooks/Requests";

const Sidenav = () => {
  const logout = useLogout();
  return (
    <nav className="sidenav box bg-1">
      <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      <ul>
        <li>
          <span>
            <img src={inicio} alt="" />
          </span>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <span>
            <img src={resumo} alt="" width={20} />
          </span>
          <NavLink to="/resumo">Resumo</NavLink>
        </li>{" "}
        <li onClick={logout}>
          <span>
            <img src={sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
