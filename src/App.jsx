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
import { NewCaseStudyContextProvider } from "../context/NewCaseStudyContext";
import { Toaster } from "react-hot-toast";
import Event from './pages/preview/Event'
import CreateCaseStudy from "./components/CaseStudiesPage/CreateCaseStudy";
import LeadershipPage from "./pages/leadership/LeadershipPage";
import CreateLeadership from "./components/createLedership/CreateLeadership";
import { LeadershipContextProvider } from "../context/LeadershipContext";
import Careers from "./components/careers/Careers";

function App() {
  return (
    <div className=" overflow-hidden">
      <BrowserRouter>

      <LeadershipContextProvider>
      <WebinarContextProvider>
      <EventPageContextProvider>
      <NewCaseStudyContextProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/events-and-webinars" element={<EventAndWebenar />}/>
              <Route path="/case-studies" element={<CaseStudiesPage />}/>
              <Route path="/leadership" element={<LeadershipPage />}/>
              <Route path="/careers" element={<Careers/>}/>
            </Route>
            <Route>
              <Route path="/create/event" element={<CreateEventPage />} />
              <Route path="/create/webinar" element={<CreateWebinarPage />} />
              <Route path="/create/case-study" element={<CreateCaseStudy />} />
              <Route path="/create/leadership" element={<CreateLeadership />} />
            </Route>
            {/* Preview pages route  */}
            <Route>
              <Route path="/preview/event/:id" element={<Event/>}/>
            </Route>
            {/* Edit pages route  */}
            <Route>
              <Route path="/edit/event/:id" element={<CreateEventPage/>}/>
            </Route>
          </Routes>
      </NewCaseStudyContextProvider>
      </EventPageContextProvider>
      </WebinarContextProvider>
      </LeadershipContextProvider>
    
     </BrowserRouter>
      <ToastContainer />
      <Toaster/>
    </div>
  );
}

export default App;
