import Section from "./section";

export default function SkillSection() {
  return (
    <Section title="SKILLS">
      <div className="md:flex text-sm">
        <div className="w-48 flex-shrink-0 flex justify-between">
          <span className="font-bold">Programming</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          JavaScript, TypeScript, Python, C++, java, HTML5, CSS3
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-48 flex-shrink-0 flex justify-between">
          <span className="font-bold">Frameworks and Libraries</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          React.js, Redux, Next.js, Express.js, Nest.js
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-48 flex-shrink-0 flex justify-between">
          <span className="font-bold">Tools and Technologies</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          MongoDB, SQL, Docker, Git, Prisma ORM, Selenium
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-48 flex-shrink-0 flex justify-between">
          <span className="font-bold">Others</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          Web scraping, AI model development
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-48 flex-shrink-0 flex justify-between">
          <span className="font-bold">Soft Skills</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          Communication Skills, Problem-Solving, Teamwork, Time Management
        </div>
      </div>
    </Section>
  );
}
