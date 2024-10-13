import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";

const exp: ExperienceProps[] = [
  {
    head1: "Front-end Developer",
    head2: <LabelWithGraphic icon={Icons.Stack} content="JavaScript, React, Next.js ,tailwind , CSS, HTML" />,
    head3: (
      <LabelWithGraphic
        image=""
        content="Swaqnt, Tanta, Egypt"
      />
    ),
    head4: "Aug 2024 - Present",
    bulletPoints: [
      "Developed and maintained responsive user interfaces using React and Next.js, ensuring high performance across multiple devices and browsers.",
      "Collaborated with back-end developers to integrate APIs, enhancing data flow and user experience.",
      "Implemented reusable components, optimizing performance and code maintainability across the platform.",
      "Led front-end efforts for key projects, including optimizing user interaction and reducing page load times.",
    ],
  }
  ,
  {
    head1: "Full Stack Developer",
    head2: <LabelWithGraphic icon={Icons.Stack} content="JavaScript, Express.js, TypeScript, Node.js" />,
    head3: (
      <LabelWithGraphic
        image=""
        content="Mts, banha, Egypt"
      />
    ),
    head4: "Jan 2024 - Mar 2024.",
    bulletPoints: [
      "Supported and provided subject matter expertise in the development of a user-friendly POS system using Node.js and Express.js",
      "Assisted in system upgrades and testing for development releases.",
      "Developed and maintained RESTful APIs, ensuring seamless integration with third-party services.",
      "Collaborated closely with front-end developers to enhance user interfaces and deliver a smooth user experience.",
    ],
  },

];

export default function WorkSection() {
  return (
    <Section title="WORK EXPERIENCE">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
