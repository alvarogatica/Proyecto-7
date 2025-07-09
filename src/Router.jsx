import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PurseState from "./contexts/purse/PurseState";
import PurseList from "./components/Purse/List";
import SinglePurse from "./components/Purse/Single";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import UserState from "./contexts/user/UserState";
import AuthRoute from "./routes/Auth";
import PrivateRoute from "./routes/Private";
import Profile from "./components/Profile";

const Router = () => {
  return (
    <>
      <UserState>
        <PurseState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<AuthRoute component={Login} />} />
                <Route
                  path="perfil"
                  element={<PrivateRoute component={Profile} />}
                />
                <Route path="purses" element={<PurseList />} />
                <Route path="purses/:id" element={<SinglePurse />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PurseState>
      </UserState>
    </>
  );
};

export default Router;
