
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import StopWatch from "./pages/StopWatch";
import UserList from "./pages/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuotePage from "./pages/Quote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stop-watch" element={<StopWatch />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="quote-app" element={<QuotePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
