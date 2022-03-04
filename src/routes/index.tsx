import { Home } from "pages/Home";
import { Routes, Route, BrowserRouter} from "react-router-dom";

export const TheRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} >
        </Route>
      </Routes>
  );
};
