import { Icons } from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import Link from "next/link";
import ActionButton from "@/components/action-button";
import { cn } from "@/lib/utils";

type Props = {
  usage: "live" | "pdf";
};

export default function HeaderSection({ usage }: Props) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-4 my-1">Abdelrhman Mohamed</h2>
          <SocialLink
            href="https://github.com/abdelrhman-mohamed-dev"
            platform="github"
            aria-label="My GitHub"
            className="mx-1 h-4 w-4"
          />
          <SocialLink
            href="https://www.linkedin.com/in/abdelrhman-mohamed-2bab9a213/"
            platform="linkedin"
            aria-label="My LinkedIn"
            className="mx-1 h-4 w-4"
          />
        </div>
        <ActionButton
          text={usage === "live" ? "Download Resume" : "View Live Resume"}
          usage={usage}
          className={cn(usage === "live" && "hidden sm:block")}
        />
      </div>
      <div className="flex flex-wrap gap-4 gap-y-1 text-sm">
        <Link
          href="mailto:mohamedsaad81973@gmail.com"
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icons.Mail size={12} className="group-hover:animate-shake" />
          mohamedsaad81973@gmail.com
        </Link>
        <Link
          href="tel:+11234567890"
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icons.PhoneCall size={12} className="group-hover:animate-shake" />
          (+20) 101-426-9976
        </Link>
      </div>
    </section>
  );
}
