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
  skills: string;
  tools: string;
}