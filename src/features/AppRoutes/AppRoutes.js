import { Route, Routes } from "react-router-dom";
import StartLesson from "../StartLesson/StartLesson";
import Hook from "../Hook/Hook";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartLesson/>}></Route>
        <Route path="/hook" element={<Hook />}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes;
