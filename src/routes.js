import Index from "./pages/Index"
// import AboutMe from "./pages/AboutMe"
// import Resume from "./pages/Resume"
// import ResumeSingle from "./pages/ResumeSingle"
import NotFound from "./pages/NotFound"
// import Profile from "./pages/Profile"

const routes = [
  {
    exact: true,
    path: "/",
    component: Index,
    private:false,
  },
  {
    component: NotFound,
    private:false,
  },
]

export default routes