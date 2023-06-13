import { Component } from "@lib/utils/component";
import { MemberCardProps } from "./member-card.type";
import { DayJS } from "@lib/utils/day-js";
import Image from "next/image";

export const MemberCard: Component<MemberCardProps> = ({ username, image, birthday }) => {
  return (
    <div className="bg-background-card px-2 py-3 rounded-md flex gap-5 items-center w-96 sm:w-72">
      <div className="flex items-center gap-2">
        <Image src={image} alt="crown" width={60} height={60} className="rounded-md" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-white text-lg">
          {username}
        </span>

        {birthday && (
            <span className="text-white-desc text-sm -mt-2">
              {DayJS().diff(birthday, "year", false)} ans
            </span>
          )}
      </div>
    </div>
  );
};