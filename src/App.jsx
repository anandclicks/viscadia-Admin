import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "remixicon/fonts/remixicon.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import EventAndWebenar from "./pages/EventAndWebenar";
import CreateEventPage from "./pages/CreateEventPage";
import { EventPageContextProvider } from "../context/EventPageContext";

function App() {
  return (
    <div className=" max-w-[1600px] max-w-ful mx-auto overflow-hidden">
      <EventPageContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/events-and-webinars"
                element={<EventAndWebenar />}
              />
            </Route>
            <Route>
              <Route path="/event/create" element={<CreateEventPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </EventPageContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
