import Blogs from "./component/blogs";
import Course from "./component/Course";
import CourseOnline from "./component/CourseOnline";
import Header from "./component/Header";
import Section from "./component/Section";

export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <Course />
      <CourseOnline />
      <Blogs />
    </>
  );
}
