import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home";
import Callback from "./pages/callback";
import ProtectedEndpoints from "./pages/protectedEndpoints";

export default function App() {
  return (
    <div className="container w-screen">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="callback" element={<Callback />} />
          <Route path="protected-endpoints" element={<ProtectedEndpoints />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
