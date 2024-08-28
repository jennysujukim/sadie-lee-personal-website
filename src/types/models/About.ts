export type AboutType = {
  title: string;
  main: string[];
  experience: {
    company: string;
    duration: string;
    location: string;
    role: string;
    roleDescription: string;
  }[];
  education: {
    degree: string;
    duration: string;
    field: string;
    location: string;
    school: string;
  }[];
  awardsAndEvents: {
    date: string;
    title: string;
    description: string;
  }[];
  exhibition: {
    date: string;
    location: string;
    title: string;
    type: string;
  }[];
}