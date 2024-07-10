import MemoCategoriesDark from "@/icons/CategoriesDark";
import MemoCategoriesLight from "@/icons/CategoriesLight";
import MemoCommunityDark from "@/icons/CommunityDark";
import MemoCommunityLight from "@/icons/CommunityLight";
import MemoCourseDark from "@/icons/CourseDark";
import MemoCourseLight from "@/icons/CourseLight";
import MemoHomeDark from "@/icons/HomeDark";
import MemoHomeLight from "@/icons/HomeLight";
import MemoLearningPathsDark from "@/icons/LearningPathsDark";
import MemoLearningPathsLight from "@/icons/LearningPathsLight";
import MemoProfileDark from "@/icons/ProfileDark";
import MemoProfileLight from "@/icons/ProfileLight";
import MemoQuizzesDark from "@/icons/QuizzesDark";
import MemoQuizzesLight from "@/icons/QuizzesLight";

import chem from "../assets/images/chem.svg";
import bio from "../assets/images/bio.svg";
import maths from "../assets/images/maths.svg";

export const NavLinks = [
  {
    to: "/",
    iconDark: MemoHomeDark,
    iconLight: MemoHomeLight,
    label: "Home",
  },
  {
    to: "/course",
    iconDark: MemoCourseDark,
    iconLight: MemoCourseLight,
    label: "Courses",
  },
  {
    to: "/categories",
    iconDark: MemoCategoriesDark,
    iconLight: MemoCategoriesLight,
    label: "Categories",
  },

  {
    to: "/learning",
    iconDark: MemoLearningPathsDark,
    iconLight: MemoLearningPathsLight,
    label: "Learning Paths",
    badgeCount: 3,
  },
  {
    to: "/quizzes",
    iconDark: MemoQuizzesDark,
    iconLight: MemoQuizzesLight,
    label: "Quizzes",
  },
  {
    to: "/community",
    iconDark: MemoCommunityDark,
    iconLight: MemoCommunityLight,
    label: "Community",
  },
  {
    to: "/profile",
    iconDark: MemoProfileDark,
    iconLight: MemoProfileLight,
    label: "Profile",
  },
];

export const Courses = [
  {
    title: "Mathematics",
    chapter: "Chapter 3:Pythagoras Theorem",
    image: maths,
    progress: 31,
  },
  {
    title: "Chemistry",
    chapter: "Chapter 3:Atoms",
    image: chem,
    progress: 76,
  },
  {
    title: "Biology",
    chapter: "Chapter 3:Skeletal system",
    image: bio,
    progress: 49,
  },
];
