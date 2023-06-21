import type { Component } from "#/lib/utils/component";
import type { MemberCardProps } from "./member-card.type";
import { CiLocationOn } from "react-icons/ci";
import { dayJS } from "#/lib/utils/day-js";
import Image from "next/image";
import Link from "next/link";

export const MemberCard: Component<MemberCardProps> = ({ tag, username, profilePicture, birthday, technologies, location }) => {
  return (
    <Link
      href={`/members/${tag}`}
      className="bg-background-card hover:bg-background-card-hover p-3 rounded w-full flex gap-5 transition-all duration-200"
      role="listitem"
      aria-label={`${username} member`}
    >
      <div className="relative h-24 aspect-square flex items-center gap-2">
        <Image src={profilePicture} alt="crown" fill className="rounded" />
      </div>

      <div className="relative w-full">
        <div className="flex items-center gap-2 items-baseline mb-1">
          <p className="text-white text-lg text-ellipsis overflow-hidden whitespace-nowrap max-w-[70%]">{username}</p>

          {birthday && (
            <p className="text-white-desc text-xs whitespace-nowrap">
              {dayJS().diff(birthday, "year", false)} ans
            </p>
          )}
        </div>

        {location && (
          <div className="text-white-desc flex items-center gap-1">
            <CiLocationOn />
            <p className="text-sm">{location}</p>
          </div>
        )}

        {technologies.length > 0 && (
          <div className="absolute bottom-0 h-6 w-full rounded flex items-center justify-end gap-2">
            {technologies.map((techno) => (
              <div key={techno.name} className="relative aspect-square h-5">
                <Image src={`/images/icons/${techno.icon}`} alt={`${techno.name} Icon`} fill className="object-contain" />
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};