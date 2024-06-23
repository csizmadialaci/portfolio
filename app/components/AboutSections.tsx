import { Card } from "@/components/ui/card";

import dedicatedPicture from "../../public/me2.jpg";
import Image from "next/image";

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <Card className="col-span-1 lg:col-span-2 border-none bg-gray-100 p-8">
        <h1 className="text-2xl lg:text-4xl">
          Versatile Web Developer with a Passion for Innovation
        </h1>
        <p className="mt-4 text-muted-foreground lg:text-lg">
          {" "}
          I am a computer science student dedicated to crafting efficient,
          scalable, and maintainable web applications. With experience in modern
          technologies and frameworks, I thrive on developing innovative,
          user-friendly solutions that address real-world challenges.
        </p>
        <a
          href="mailto:csizmadia.laszlo@student.ms.sapientia.ro"
          className="mt-5 relative inline-block text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-60 h-60 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get in touch with me!</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </Card>
      <div className="col-span-1 max-h-[400px] relative">
        <Image
          src={dedicatedPicture}
          alt="dedicated developer"
          className="col-span-1 h-[400px] object-cover rounded-2xl bg-gray-100"
        />
      </div>
    </div>
  );
}
