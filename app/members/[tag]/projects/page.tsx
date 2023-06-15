"use client";

import { useContext, type ReactElement } from "react";
import { notFound } from "next/navigation";
import { MemberContext } from "../member-provider";
import { Heading } from "@lib/components/atomics/texts/heading";
import { NewProjectCard } from "@lib/components/atomics/cards/project-cards/new-project-card";
import Image from "next/image";

const MemberPage = (): ReactElement => {
  const member = useContext(MemberContext);
  if (!member) notFound();

  let connected: boolean = false;
  if (member.username == "RomainSav") {
    connected = true;
  }

  return (
    <div>
      {member.projects && member.projects.length > 0 ? (
        <div className="bg-background-card p-4 rounded-md">
          <>
            <div className="grid gap-1">
              {member.projects.map((project) => (
                <div className="text-white-desc items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Heading type="h4" className="text-white">{project.name}</Heading>
                    <div className="px-2 pb-2 rounded-md bg-[#0c0c0d]">
                      {project.technologies && (
                        <div className="flex gap-2">
                          {project.technologies.map((technology) => (
                            <div className="flex items-center gap-1 mt-2">
                              <Image src={`/images/icons/${technology.icon}`} alt={`${technology.name} Icon`} height={15} width={15} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="h-1 w-8 bg-purple rounded-md mb-2" />
                    <p className="text-white-desc text-opacity-50">{project.description}</p>

                    {project.images && (
                      <div className="flex gap-2">
                        {project.images.map((image) => (
                          <div className="flex items-center gap-1 mt-2">
                            <Image
                              src={`${image}`}
                              alt={`${project.name} Image`}
                              className="rounded-md w-full"
                              height={10}
                              width={1000}/>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
        </div>
      ) : (
        <div className="text-white-desc flex items-center gap-2 border-l-4 border-l-danger pl-2">
          <p>L'utilisateur n'a pas encore réalisé de projet ou n'a pas encore publié ses projets.</p>
        </div>
      )}

      {connected && (
        <div className="mt-4">
          <NewProjectCard />
        </div>
      )}
    </div>
  );
};

export default MemberPage;