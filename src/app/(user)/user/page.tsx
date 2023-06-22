"use client";

import { useState, type ReactElement } from "react";
import { Heading } from "#/lib/components/atoms/texts/heading";
import { Text } from "#/lib/components/atoms/texts";
import { BsArrowDown, BsArrowUp, BsTrash } from "react-icons/bs";
import Image from "next/image";
import { technoList } from "#/lib/configs/member";

const MemberPage = (): ReactElement => {
  const [list, setList] = useState(technoList);

  const handleDeleteTechno = (techno: string): void => {
    const newList = list.filter((item) => item.name !== techno);
    setList(newList);
  };

  const handleMoveTechnoUp = (techno: string): void => {
    const index = list.findIndex((item) => item.name === techno);
    const newList = [...list];
    const temp = newList[index];
    newList[index] = newList[index - 1];
    newList[index - 1] = temp;
    setList(newList);
  };

  const handleMoveTechnoDown = (techno: string): void => {
    const index = list.findIndex((item) => item.name === techno);
    const newList = [...list];
    const temp = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = temp;
    setList(newList);
  };

  return (
    <div className="container">
      <Heading type="h1" className="font-bold">Modifier mon profil</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div className="bg-background-card mt-5 rounded">
            <div className="p-5">
              <div>
                <Text className="font-bold">Nom d&apos;utilisateur</Text>
                <input
                  className="mt-2 w-full bg-background-card-hover text-white-desc border-white-desc p-2 rounded cursor-text focus:border-white-desc"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-background-card mt-5 rounded">
            <div className="p-5">
              <Text className="font-bold">Vos technologies</Text>

              {list.map((techno) => (
                <div key={techno.name} className="mt-2 flex justify-between bg-background-card-hover p-2 rounded">
                  <div className="flex gap-2 items-center">
                    <Image className="select-none" src={"/images/icons/" + techno.icon} alt={techno.name} width={20} height={20} />
                    <Text className="select-none">{techno.name}</Text>
                  </div>

                  <div className="flex gap-2 items-center">
                    {list.indexOf(techno) !== list.length - 1 && (
                      <BsArrowDown
                        onClick={() => handleMoveTechnoDown(techno.name)}
                        className="select-none cursor-pointer p-1 rounded hover:bg-background-card text-white-desc hover:text-primary h-6 w-6" />
                    )}

                    {list.indexOf(techno) !== 0 && (
                      <BsArrowUp
                        onClick={() => handleMoveTechnoUp(techno.name)}
                        className="select-none cursor-pointer p-1 rounded hover:bg-background-card text-white-desc hover:text-primary h-6 w-6" />
                    )}

                    <BsTrash
                      onClick={() => handleDeleteTechno(techno.name)}
                      className="select-none p-1 rounded h-6 w-6 hover:bg-background-card text-white-desc hover:text-danger"  />
                  </div>
                </div>
              ))}

              {list.length === 0 && (
                <>
                  <Text className="mt-2">Vous n&apos;avez pas encore ajouté de technologie, vous pouvez en ajouter une, ci-dessous.</Text>
                  <div className="flex gap-2 items-center mt-2">
                    <input
                      className="bg-background-card-hover text-white-desc border-white-desc p-2 rounded cursor-text focus:border-white-desc"
                      type="text"
                      placeholder="Svelte"
                    />

                    <button className="bg-purple hover:bg-purple-hover text-white py-2 px-4 rounded">
                      Ajouter
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;