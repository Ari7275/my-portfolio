import { StaticImageData } from "next/image";

export enum SelectedPage{
  Home = "home",
  AboutMe = "aboutme",
  Projects = "projects",
  ContactMe = "contactme"
}

export interface ProjectType {
  image: StaticImageData;
  title: string;
  description: string;
  skills?: string;
  url: string;
}