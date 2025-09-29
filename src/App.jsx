import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import NewsAndPress from "./components/NewsAndPress/NewsAndPress";
import CreatePressReleases from "./pages/NewsAndPress/CreatePressReleases";
import Webinar from './pages/preview/Webinar'


function App() {
  return (
    <div className=" overflow-hidden">
      <BrowserRouter>
      <NewCaseStudyContextProvider>
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
              <Route path="/news-and-press-releases" element={<NewsAndPress/>}/>
            </Route>
            <Route>
              <Route path="/create/event" element={<CreateEventPage />} />
              <Route path="/create/webinar" element={<CreateWebinarPage />} />
              <Route path="/create/case-study" element={<CreateCaseStudy />} />
              <Route path="/create/leadership" element={<CreateLeadership />} />
              <Route path="/create/news-and-press-releases" element={<CreatePressReleases />} />
            </Route>
            {/* Preview pages route  */}
            <Route>
              <Route path="/preview/event/:id" element={<Event/>}/>
              <Route path="/preview/webinar/:id" element={<Webinar/>}/>
            </Route>
            {/* Edit pages route  */}
            <Route>
              <Route path="/edit/event/:id" element={<CreateEventPage/>}/>
              <Route path="/edit/case-study/:id" element={<CreateCaseStudy/>}/>
            </Route>
          </Routes>
      </NewCaseStudyContextProvider>
      </EventPageContextProvider>
      </WebinarContextProvider>
      </LeadershipContextProvider>
      </NewCaseStudyContextProvider>
     </BrowserRouter>
      <ToastContainer />
      <Toaster/>
    </div>
  );
}

export default App;
