import Index from "./pages/Index"
import NotFound from "./pages/NotFound"

const routes = [
  {
    path: "/",
    element: Index,
    private:false,
  },
  {
    path: "*",
    element: NotFound,
    private:false,
  },
]

export default routes