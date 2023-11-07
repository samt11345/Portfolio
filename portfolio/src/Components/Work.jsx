import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Scanner",
    duration: "Current",
    details:
      "Inspected items to identify discrepancies and damages and reported to supervisor. Collaborated with team members to achieve daily goals and meet company objectives.",
  },
  {
    year: 2020,
    title: "#1 Cochran Mazda/Volkswagen",
    duration: "2023",
    details:
      "Collaborated with team members to achieve daily goals and meet company objectives. Operated power jacks and forklifts to maneuver products onto load trailers and trucks.",
  },
  {
    year: 2017,
    title: "Publix Supermarkets",
    duration: "2020",
    details:
      "Maintained multiple projects while following precise recipe execution. " +
      "Collaborated with team members to complete tasks and maintain the smooth running of the bakery.",
  },
  {
    year: 2016,
    title: "Customer Service Representative",
    duration: "2017",
    details:
      "Point of contact for customers for both sales and services, including scheduling, issue resolution, and follow-up to ensure customer satisfaction. " +
      "Liaison between the customer and technicians with the goal of meeting all needs and building a return customer base to grow the business.",
  },
  {
    year: 2019,
    title: "Serra Toyota",
    duration: "2019",
    details:
      "Negotiated purchase prices and explained sales, warranty, and optional products. " +
      "Developed and delivered engaging sales presentations to convey product benefits.",
  },
  {
    year: 2019,
    title: "Loader services",
    duration: "2019",
    details:
      "Inspected items to identify discrepancies and damages and reported to the supervisor. Collaborated with team members to achieve daily goals and meet company objectives. " +
      "Operated power jacks and forklifts to maneuver products onto load trailers and trucks.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]"> Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
