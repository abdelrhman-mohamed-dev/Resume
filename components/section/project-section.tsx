import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { type ImageProps } from "next/image";
import { headers } from "next/headers";

type ProjectTitleProps = {
  image: ImageProps["src"];
  title: string;
  link: string;
};

async function getStarNumber(owner: string, repo: string) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const queryParams = new URLSearchParams({ owner, repo }).toString();
  const res = await fetch(
    `${protocol}://${host}/api/github/star?${queryParams}`,
    {
      cache: "no-cache",
    }
  );
  const { starNumber } = await res.json();
  return starNumber;
}

function ProjectTitle({ image, title, link }: ProjectTitleProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-x-1 group"
    >
      <LabelWithGraphic image={image} content={title} />
      <Icons.Link
        size={12}
        className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
      />
    </Link>
  );
}

export default async function ProjectSection() {
  const exp: ExperienceProps[] = [
    {
      head1: (
        <ProjectTitle
          image="/images/logos/sellxa.png"
          title="Sellxa E-commerce Website"
          link="https://sellxa.com/"
        />
      ),
      head2: (
        <LabelWithGraphic icon={Icons.Stack} content="TypeScript, React, Tailwind CSS, Next.js" />
      ),
      head3: "Dual-language support: Arabic & English",
      head4: "Aug 2024",
      bulletPoints: [
        "Developed and maintained the front-end of a multi-language e-commerce platform, supporting both Arabic and English versions.",
        "Integrated TypeScript and React for scalable, high-performance web development.",
        "Implemented Tailwind CSS to create a responsive and visually appealing user interface.",
        "Collaborated with a team to optimize the site for SEO, resulting in increased traffic and sales.",
      ],
    }
    ,
    {
      head1: (
        <ProjectTitle
          image="/images/logos/gardifi.png"
          title="Gardify Ads and Click Protection"
          link="https://gardify.com/"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="Next.js, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI" />,
      head3: "",
      head4: "Sep 2024",
      bulletPoints: [
        "Developed a real-time system to detect and block fake and spam clicks, ensuring ad campaign protection.",
        "Implemented algorithms to analyze click patterns and identify suspicious activities, increasing ad ROI for clients.",
        "Created a user-friendly dashboard with Next.js and Tailwind CSS, enabling clients to monitor click analytics in real-time.",
        "Enhanced user experience with smooth animations using Framer Motion and customized components with Shadcn UI.",
      ],
    },
    {
      head1: (
        <ProjectTitle
          image="/images/logos/fav-icon.png"
          title="Ishift - Landing Page"
          link="https://ishift.ae/"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="React, Vite, TypeScript, Tailwind CSS, Framer Motion" />,
      head3: "A Modern and Interactive Landing Page",
      head4: "Sep 2024",
      bulletPoints: [
        "Designed and developed a visually stunning landing page to showcase company projects and expertise, using React and Vite for optimized performance.",
        "Integrated Tailwind CSS to create a fully responsive layout that provides a seamless experience across all devices.",
        "Utilized Framer Motion to add interactive animations, enhancing the overall user experience and engagement.",
        "Ensured fast load times and smooth navigation with efficient code structuring and real-time data integration.",
      ],
    },
    {
      head1: (
        <ProjectTitle
          image="/images/logos/travel.png"
          title="Hilink - Travel Landing Page"
          link="https://hilink-one.vercel.app/"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="Next.js, TypeScript, Tailwind CSS, Framer Motion" />,
      head3: "Explore the World with Hilink",
      head4: "Sep 2024",
      bulletPoints: [
        "Developed a visually captivating landing page to promote travel destinations and experiences, ensuring an engaging user journey.",
        "Implemented a fully responsive design using Tailwind CSS, providing seamless access across mobile, tablet, and desktop devices.",
        "Added dynamic, immersive animations with Framer Motion to captivate users and highlight key travel offers and experiences.",
        "Optimized page performance with Next.js for fast load times and smooth transitions, enhancing user engagement and reducing bounce rates.",
      ],
    }




  ];

  return (
    <Section title="PROJECT">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
