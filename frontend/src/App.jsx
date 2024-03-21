import "./styles/main.scss";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";

export default function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
        <Route component={<NotFound />} />
      </Routes>
    </Layout>
  );
}
