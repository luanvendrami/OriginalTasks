import { BrowserRouter } from "react-router-dom";
import { TheRoutes } from "routes";
import { GlobalStyles } from "styles/global";

export const App = () => {
  return (
    <BrowserRouter>
      <TheRoutes />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
