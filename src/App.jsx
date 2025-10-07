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
import CaseStudy from "./pages/preview/CaseStudy";
import CreteCareersPage from "./pages/careers/CreteCareersPage";
import { CareersContextProvider } from "../context/CareersContext";
import Contact from "./pages/contactPage/Contct";
import Users from "./pages/usersPage/Users";
import ProfilePage from './pages/profile/PorfilePage';
import Login from "./pages/Login";
import Leadership from "./pages/preview/leadership";
import { PorfileContextProvider } from "../context/ProfileDetailsContext";
import AddUser from "./pages/AddUser";
import { NewsAndPressContextProvider } from "../context/NewsAndPressContext";


function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
      <NewsAndPressContextProvider>
      <PorfileContextProvider>
      <CareersContextProvider>
      <NewCaseStudyContextProvider>
      <LeadershipContextProvider>
      <WebinarContextProvider>
      <EventPageContextProvider>
      <NewCaseStudyContextProvider>
          <Routes>
           <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/events-and-webinars" element={<EventAndWebenar />}/>
              <Route path="/case-studies" element={<CaseStudiesPage />}/>
              <Route path="/leadership" element={<LeadershipPage />}/>
              <Route path="/careers" element={<Careers/>}/>
              <Route path="/news-and-press-releases" element={<NewsAndPress/>}/>
              <Route path="/contacts" element={<Contact/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/add-user" element={<AddUser/>}/>
            </Route>
            <Route>
              <Route path="/create/event" element={<CreateEventPage />} />
              <Route path="/create/webinar" element={<CreateWebinarPage />} />
              <Route path="/create/case-study" element={<CreateCaseStudy />} />
              <Route path="/create/leadership" element={<CreateLeadership />} />
              <Route path="/create/news-and-press-releases" element={<CreatePressReleases />} />
              <Route path="/create/new-career" element={<CreteCareersPage/>} />
            </Route>
            {/* Preview pages route  */}
            <Route>
              <Route path="/preview/event/:id" element={<Event/>}/>
              <Route path="/preview/webinar/:id" element={<Webinar/>}/>
              <Route path="/preview/case-study/:id" element={<CaseStudy/>}/>
              <Route path="/preview/leadership/:id" element={<Leadership/>}/>
            </Route>
            {/* Edit pages route  */}
            <Route>
              <Route path="/edit/event/:id" element={<CreateEventPage/>}/>
              <Route path="/edit/case-study/:id" element={<CreateCaseStudy/>}/>
              <Route path="/edit/webinar/:id" element={<CreateWebinarPage/>}/>
              <Route path="/edit/career/:id" element={<CreteCareersPage/>}/>
              <Route path="/edit/leadership/:id" element={<CreateLeadership/>}/>
            </Route>
          </Routes>
      </NewCaseStudyContextProvider>
      </EventPageContextProvider>
      </WebinarContextProvider>
      </LeadershipContextProvider>
      </NewCaseStudyContextProvider>
      </CareersContextProvider>
      </PorfileContextProvider>
      </NewsAndPressContextProvider>
     </BrowserRouter>
      <ToastContainer />
      <Toaster/>
    </div>
  );
}

export default App;
