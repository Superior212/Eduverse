import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Course from "./Pages/Course";
import Community from "./Pages/Community";
import Quizzes from "./Pages/Quizzes";
import LearningPaths from "./Pages/LearningPaths";
import Categories from "./Pages/Categories";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/learning" element={<LearningPaths />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
