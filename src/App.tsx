import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat/Chat";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { ChatMessage } from "./components/ChatMessage/ChatMessage";
import MainPage from "./pages/Main/MainPage";
import { PanoramaPage } from "./pages/PanoramaPage";
import ProfilePage from "./pages/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/chats",
      element: <Chat />,
    },
    {
      path: "/",
      element: <MainPage />,
    },
    // {
    //   path: "/chat",
    //   element: <Chat/>,
    // },
    {
      path: "/panorama",
      element: <PanoramaPage />,
    },
    {
      path: "/ChatInner/:id",
      element: <ChatMessage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/sidebar",
      element: <Sidebar />,
    },
    {
      path: "signIn",
      element: <SignIn />,
    },
    {
      path: "signUp",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
