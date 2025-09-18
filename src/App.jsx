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
import CreateEventPage from "./components/createEventPage/CreateEventPage";
import CreateWebinarPage from "./components/createWebinarPage/CreateWebinarPage";
import CaseStudy from "./components/CaseStudiesPage/CaseStudy";
import { NewCaseStudyContextProvider } from "../context/NewCaseStudy";
import { Toaster } from "react-hot-toast";
import Event from './pages/preview/Event'

function App() {
  return (
    <div className=" max-w-[1600px] max-w-ful mx-auto overflow-hidden">
      <WebinarContextProvider>
      <EventPageContextProvider>
      <NewCaseStudyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/events-and-webinars" element={<EventAndWebenar />}/>
              <Route path="/case-studies" element={<CaseStudiesPage />}/>
            </Route>
            <Route>
              <Route path="/create/event" element={<CreateEventPage />} />
              <Route path="/create/webinar" element={<CreateWebinarPage />} />
              <Route path="/create/case-study" element={<CaseStudy />} />
            </Route>
            {/* Preview pages route  */}
            <Route>
              <Route path="/preview/event" element={<Event/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </NewCaseStudyContextProvider>
      </EventPageContextProvider>
      </WebinarContextProvider>
      <ToastContainer />
      <Toaster/>
    </div>
  );
}

export default App;
