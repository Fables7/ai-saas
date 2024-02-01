"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description:
      "This is the best application I've used in my career as a software engineer! It has not only increased my productivity but also enhanced the quality of my code. I couldn't imagine my work without it now.",
  },
  {
    name: "Ryan",
    avatar: "R",
    title: "Web Developer",
    description:
      "As a web developer, I've been using this AI app to generate code snippets quickly. It has been a great time-saver and has improved my workflow significantly.",
  },
  {
    name: "Daniel",
    avatar: "D",
    title: "Content Writer",
    description:
      "I've found this AI app to be quite helpful in generating content ideas. It's a useful addition to my writing toolkit.",
  },
  {
    name: "Linda",
    avatar: "L",
    title: "Content Creator",
    description:
      "This AI app has been a game-changer for me as a content creator. It helps me generate engaging text, images, and even music for my projects. Highly recommended!",
  },
];
export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className=" text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className=" pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
