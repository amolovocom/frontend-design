import "./job.css";
import JobBox from "./job.html";
import JobList from "./job-list.html";

export default {
  title: "Components/Job",
  parameters: { layout: "centered" },
};

export const JobBoxView= () => JobBox;


export const JobListView= () => JobList;
