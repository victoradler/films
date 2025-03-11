import React from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Face de Cristo | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Face de Cristo | Vendas";
    } else if (location.pathname === "/escala") {
      setTitle("Escala");
      document.title = "Face de Cristo | Escala";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3 text-center">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
