import Blogs from "./component/Blogs";
import Course from "./component/Course";
import CourseOnline from "./component/CourseOnline";
import Header from "./component/Header";
import Qa from "./component/Qa";
import Section from "./component/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <Course />
      <section className="relative">
        <Image
          src="/s1.png" // Path to your card image
          width={100}
          height={100}
          alt="Card Image"
          className="object-cover w-72 h-100 absolute -top-24 right-0 bottom-0" // Adjust this as needed
        />
      </section>
      <CourseOnline />
      <Blogs />
      <Qa />
      <section className="relative">
        <Image
          src="/s2.png" // Path to your card image
          width={100}
          height={100}
          alt="Card Image"
          className="object-cover w-40 h-100 absolute right-0 bottom-0" // Adjust this as needed
        />
      </section>
    </>
  );
}
