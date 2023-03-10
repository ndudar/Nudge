import { Route, Routes } from "react-router-dom";
import StartLesson from "../StartLesson/StartLesson";
import Hook from "../Hook/Hook";
import Intro from "../Intro/Intro";
import Model from "../Model/Model";
import GuidedPractice from "../GuidedPractice/GuidedPractice";
import IndependentPractice from "../IndependentPractice/IndependentPractice";
import MidWorkshop from "../MidWorkshop/MidWorkshop";
import Reteach from "../Reteach/Reteach";
import Closing from "../Closing/Closing";
import Reflection from "../Reflection/Reflection";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartLesson/>}></Route>
        <Route path="/hook" element={<Hook/>}></Route>
        <Route path="/intro" element={<Intro/>}></Route>
        <Route path="/model" element={<Model/>}></Route>
        <Route path="/guided-practice" element={<GuidedPractice/>}></Route>
        <Route path="/independent-practice" element={<IndependentPractice/>}></Route>
        <Route path="/mid-workshop" element={<MidWorkshop/>}></Route>
        <Route path="/reteach" element={<Reteach/>}></Route>
        <Route path="/closing" element={<Closing/>}></Route>
        <Route path="/reflection" element={<Reflection/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes;
