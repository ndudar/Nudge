import { Route, Routes } from "react-router-dom";
import StartLesson from "../StartLesson/StartLesson";
import Hook from "../Hook/Hook";
import Intro from "../Intro/Intro";
import Model from "../Model/Model";
import GuidedPractice from "../GuidedPractice/GuidedPractice";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartLesson/>}></Route>
        <Route path="/hook" element={<Hook/>}></Route>
        <Route path="/intro" element={<Intro/>}></Route>
        <Route path="/model" element={<Model/>}></Route>
        <Route path="/guided-practice" element={<GuidedPractice/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes;
