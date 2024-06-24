import Image from "next/image";
import square from "../../public/square.svg";
import fullstack from "../../public/fs.webp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import canva from "../../public/tech-icons/canva.svg";
import ai from "../../public/tech-icons/ai.svg";
import prisma from "../../public/prisma.webp";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import clerk from "../../public/clerk.webp";
import git from "../../public/git.png";
import github from "../../public/github.svg";
import sanity from "../../public/sanity.png";
import kinde from "../../public/kinde.jpg";
import nodejs from "../../public/nodejs.webp";
import ts from "../../public/ts.webp";
import supabase from "../../public/supabase.png";
import nextauth from "../../public/nextauth.png";
import tailwind from "../../public/tailwind2.png";
import nextjs from "../../public/nextjs.png";
import react from "../../public/react.png";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";

const icons = [
  react,
  nextjs,
  nodejs,
  nextauth,
  kinde,
  clerk,
  prisma,
  supabase,
  sanity,
  ts,
  git,
  github,
  tailwind,
  canva,
  ai,
  chatgpt,
];

const socialMediaIcons = [
  {
    id: 1,
    icon: github,
    name: "Github",
    userName: "csizmadialaci",
    link: "https://github.com/csizmadialaci",
  },
  {
    id: 2,
    icon: linkedin,
    name: "Linkedin",
    userName: "Csizmadia László",
    link: "https://www.linkedin.com/in/csizmadia-l%C3%A1szl%C3%B3-9a9b9b267/",
  },
  {
    id: 3,
    icon: insta,
    name: "Instagram",
    userName: "csizmadia.laszlo",
    link: "https://www.instagram.com/csizmadia.laszlo/",
  },
];

export function SectionTwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative cols-span-1">
        <Image
          src={fullstack}
          alt="square image"
          className="w-full h-full object-cover rounded-2xl border-2 border-gray-100"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100">
          <CardHeader>
            {" "}
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools that I use</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="icon image"
                className="w-16 h-16 rounded-lg"
              />
            ))}
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMediaIcons.map((item) => (
            <a
              href={item.link}
              key={item.id}
              className="transform-transtion duration-300 hover:scale-105 "
            >
              <Card className="p-4 flex flex-col items-center sm:items-start bg-gray-100">
                <Image src={item.icon} alt="icon" className="w-16 h-16" />
                <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                <p className="text-muted-foreground">{item.userName}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
