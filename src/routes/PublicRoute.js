import PublicPage from "../containers/public/PublicPage";
import {  Route, Routes } from "react-router-dom";
import { PATH } from "../utils/PATH";
import FlashCards from "../containers/common/FlashCards";


export default function PublicRoute() {
  return (
    <Routes>
        <Route path={PATH.HOME} element={<PublicPage/>}/>
        <Route path={PATH.FLASHCARDS} element={<FlashCards />} />
    </Routes>
  );
}

