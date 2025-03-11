import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";

import "./Style.css";
import Inicio from "./Pages/Inicio";
import Login from "./Pages/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Filme } from "./Pages/Filme";
import { CriarConta } from "./Pages/CriarConta";

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  const location = useLocation();

  const showHeader = location.pathname === "/vendas" || location.pathname === "/resumo";
  return (
    <div className="container">
      <Sidenav />
      <main>
        {showHeader && <Header />}{" "}
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/filme/:episode_id" element={<Filme />} />
          <Route path="/resumo" element={<Resumo />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    // O QueryClientProvider é um componente que deve envolver toda a aplicação para que o react-query funcione corretamente
    <QueryClientProvider client={queryClient}>
      <DataContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/conta" element={<CriarConta />} />

            {/* Rota protegida com AppContent */}
            <Route element={<ProtectedRoute />}>
              <Route path="/*" element={<AppContent />} />
            </Route>

            <Route path="*" element={<Inicio />} />
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </QueryClientProvider>
  );
};
export default App;
