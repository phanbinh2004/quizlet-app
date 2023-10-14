import {
  ClerkProvider,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import i18n from "i18next";
import React, { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import CreateStudy from "./components/pages/CreateStudy";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import HomePage from "./components/pages/Home";
import FlashCards from "./containers/common/FlashCards";
import NotFoundPage from "./containers/public/NotFoundPage";
import PublicRoute from "./routes/PublicRoute";
import { PATH } from "./utils/PATH";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <div className="container grow">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};


const App = () => {
  useEffect(() => {
    const currentLanguage = i18n.language;
    localStorage.setItem('language', currentLanguage);
  }, []);
  return (
    <BrowserRouter>
      <ClerkProvider publishableKey={clerkPubKey}>
        <Routes>
          <Route
            path={PATH.HOME}
            element={<Layout><PublicRoute /></Layout>}
          />
          <Route
            path={PATH.SIGNIN}
            element={<Layout><SignIn afterSignInUrl={PATH.APP} routing="path" path="/sign-in"/></Layout>}
          />
          <Route
            path={PATH.SIGNUP}
            element={<Layout><SignUp routing="path" path="/sign-up"/></Layout>}
          />
          <Route path={PATH.APP} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={PATH.FLASHCARDS} element={<FlashCards />} />
            <Route path={PATH.CREATE_SET} element={<CreateStudy type={PATH.CREATE_SET} />} />
            <Route path={PATH.CREATE_FOLDER} element={<CreateStudy type={PATH.CREATE_FOLDER} />} />
            <Route path={PATH.CREATE_CLASS} element={<CreateStudy type={PATH.CREATE_CLASS} />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ClerkProvider>
    </BrowserRouter>
  );
}
 

export default App;