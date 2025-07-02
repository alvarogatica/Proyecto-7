import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PurseState from "./contexts/purse/PurseState";

const Router = () => {
  return (
    <>
      <PurseState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PurseState>
    </>
  );
};

export default Router;
