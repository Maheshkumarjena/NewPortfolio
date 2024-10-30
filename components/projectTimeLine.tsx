import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ShimmerButton from "./ui/shimerBtn";

export function TimelineDemo() {
  const data = [
    {
      title: "A social network for students and alumni to connect",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-lg bg-transparent font-bold mb-8">
            built the frontend of this social platform using Next js
          </p>
          <hr />
          <div className="flex flex-col">
            <Image
              alt="image"
              width={1000}
              height={1000}
              src="/alumNex.png"
              title="Example Site"
              className="w-full h-auto min-h-[150px] background-fit border-0 shadow-lg"
            />
            <div className="mt-6 flex flex-row gap-2">
              <ShimmerButton
                text="View Site"
                link="https://alumn-nex.vercel.app"
              />
              <ShimmerButton
                text="Source code"
                link="https://github.com/Maheshkumarjena/AlumnNex.git"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title:
        " An e-commerce app's frontend built with pure HTML,CSS and Javascript  ",
      content: (
        <div>
          <p className="text-neutral-800  text-xs md:text-lg bg-transparent font-bold mb-8">
            Built it with pure HTML, CSS and Javascript with out any frameworks
            or libraries.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm bg-transparent font-mono font-bold mb-8">
            ✅ Have multiple pages <br />
            ✅ Have cart page <br />
            ✅ Have different sections for Men , women and kids <br />
            ✅ Have product detail section <br />
            ✅ have checkout section <br />
          </p>

          <div className="flex flex-col">
            <Image
              alt="image"
              width={1400}
              height={1400}
              src="/E-commerce.png"
              title="Example Site"
              className="w-full h-auto min-h-[150px] background-fit border-0 shadow-lg"
            />
            <div className="mt-6 flex flex-row gap-2">
              <ShimmerButton
                text="View Site"
                link="https://maheshkumarjena.github.io/majorProject/"
              />
              <ShimmerButton
                text="Source code"
                link="https://github.com/Maheshkumarjena/majorProject.git"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: " An authentication app using MERN stack ",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-lg bg-transparent font-bold mb-8">
            An user authentication app using MERN stack .
          </p>
          <p className="text-neutral-800 text-xs md:text-sm bg-transparent font-mono font-bold mb-8">
            ✅ Sign up <br />
            ✅ Sign In <br />
            ✅ Forgot password <br />
            ✅ Reset Password <br />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/dashboard.png"
              alt="hero template"
              width={1500}
              height={1500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/signup.png"
              alt="feature template"
              width={1500}
              height={1500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/login.png"
              alt="bento template"
              width={1500}
              height={1500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/forgotpas.png"
              alt="cards template"
              width={1500}
              height={1500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="mt-6 flex flex-row gap-2">
            <ShimmerButton
              text="View Site"
              link="https://auth-frontend-alpha-nine.vercel.app/"
            />
            <ShimmerButton
              text="Source code"
              link="https://github.com/Maheshkumarjena/AuthFrontend.git"
            />
          </div>
        </div>
      ),
    },
    {
      title: "A simple quiz App",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-lg bg-transparent font-bold mb-8">
            A simple quiz app
          </p>

          <hr />
          <div className="flex flex-col">
            <Image
              alt="image"
              width={1000}
              height={1000}
              src="/quiz.png"
              title="Example Site"
              className="w-full h-auto min-h-[150px] background-fit border-0 shadow-lg"
            />
            <div className="mt-6 flex flex-row gap-2">
              <ShimmerButton
                text="View Site"
                link="https://maheshkumarjena.github.io/Quiz_app/"
              />
              <ShimmerButton
                text="Source code"
                link="https://github.com/Maheshkumarjena/Quiz_app.git"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className=" bg-transparent  ">
      <Timeline data={data} />
    </div>
  );
}
