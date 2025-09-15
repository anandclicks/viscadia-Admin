import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "remixicon/fonts/remixicon.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import EventAndWebenar from "./pages/EventAndWebenar";
import { EventPageContextProvider } from "../context/EventPageContext";
import { WebinarContextProvider } from "../context/WebinarPageContext";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CreateEventPage from "./components/createEventPageComponents/CreateEventPage";
import CreateWebinarPage from "./components/createWebinarPageComponents/CreateWebinarPage";


function App() {
  return (
    <div className=" max-w-[1600px] max-w-ful mx-auto overflow-hidden">
      <WebinarContextProvider>
      <EventPageContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/events-and-webinars" element={<EventAndWebenar />}/>
              <Route path="/case-studies" element={<CaseStudiesPage />}/>
            </Route>
            <Route>
              <Route path="/event/create" element={<CreateEventPage />} />
              <Route path="/webinar/create" element={<CreateWebinarPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </EventPageContextProvider>
      </WebinarContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
