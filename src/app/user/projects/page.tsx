"use client";

import type { ReactElement } from "react";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { members } from "#/lib/configs/member";
import { NewProjectCard } from "#/lib/components/atoms/cards/project-cards/new-project-card";
import Image from "next/image";

const MemberProjectsPage = (): ReactElement => {
  const member = members[4];

  return (
    <div>
      <div className="mb-2">
        <NewProjectCard />
      </div>

      {member.projects && member.projects.length > 0 ? (
        <div className="bg-background-card p-4 rounded">
          <div className="grid gap-1">
            {member.projects.map((project) => (
              <div key={project.name} className="text-white-desc items-center gap-2">
                <div className="flex items-center gap-2">
                  <Heading type="h4" className="text-white text-lg">{project.name}</Heading>
                  <div className="px-2 pb-2 rounded bg-[#0c0c0d]">
                    {project.technologies && (
                      <div className="flex gap-2">
                        {project.technologies.map((technology) => (
                          <div key={technology.name} className="flex items-center gap-1 mt-2">
                            <Image src={`/images/icons/${technology.icon}`} alt={`${technology.name} Icon`} height={15} width={15} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="h-1 w-8 bg-purple rounded mb-2" />
                <p className="text-white-desc">{project.description}</p>

                {project.images && (
                  <div className="flex gap-2">
                    {project.images.map((image) => (
                      <div key={project.name} className="flex items-center gap-1 mt-2">
                        <Image
                          src={`${image}`}
                          alt={`${project.name} Image`}
                          className="rounded w-full"
                          height={10}
                          width={1000} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default MemberProjectsPage;