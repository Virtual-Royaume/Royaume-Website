import type { AsyncComponent } from "@lib/utils/component";
import type { MemberLayoutProps } from "./layout.type";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DayJS } from "@lib/utils/day-js";
import { Member } from "@lib/configs/members/members.type";
import { Heading } from "@lib/components/atomics/texts/heading";
import { Text } from "@lib/components/atomics/texts";
import { members } from "@lib/configs/members";
import { MemberProvider } from "./member-provider";
import { LittleNavbar } from "@lib/components/atomics/little-navbar";
import { Link } from "@lib/components/atomics/little-navbar/little-navbar.type";

const getMember = async (tag: string): Promise<Member | null> => {
  return members.find((member) => member.tag === tag) ?? null;
};

const MemberLayout: AsyncComponent<MemberLayoutProps> = async ({ params, children }) => {
  const member = await getMember(params.tag);
  if (!member) notFound();

  const links: Link[] = [
    {
      name: "A propos",
      href: `/members/${member.tag}`
    },
    {
      name: "Mes projets",
      href: `/members/${member.tag}/projects`
    },
    {
      name: "Activité",
      href: `/members/${member.tag}/activities`
    }
  ];

  return (
    <div className="container mt-28">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="relative aspect-square w-fit h-44 mx-auto lg:mx-0">
          <Image src={member.profilePicture} alt={`${member.tag} profile picture`} className="rounded-md" fill />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <Heading type="h1" className="font-bold">{member.username}</Heading>
            {member.birthday && (
              <Text>{DayJS().diff(member.birthday, "year", false)} ans</Text>
            )}
          </div>

          {member.technologies.length > 0 && (
            <div className="bottom-0 h-6 w-full rounded-md flex items-center gap-2">
              {member.technologies.map((techno) => (
                <div className="relative aspect-square h-5">
                  <Image src={`/images/icons/${techno.icon}`} alt={`${techno.name} Icon`} fill className="object-contain" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-16">
        <LittleNavbar links={links} />

        <div className="mt-4">
          <MemberProvider member={member}>
            {children}
          </MemberProvider>
        </div>
      </div>
    </div>
  );
};

export default MemberLayout;