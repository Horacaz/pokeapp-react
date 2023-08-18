import { Button, Link } from "@chakra-ui/react";

type Colors = {
  [key: string]: string;
};

const colors: Colors = {
  Grass: "#7AC74C",
  Fire: "#EE8130",
  Water: "#6390F0",
  Bug: "#A6B91A",
  Normal: "#A8A77A",
  Electric: "#F7D02C",
  Ground: "#E2BF65",
  Fairy: "#D685AD",
  Fighting: "#C22E28",
  Poison: "#A33EA1",
  Psychic: "#F95587",
  Rock: "#B6A136",
  Ice: "#96D9D6",
  Ghost: "#735797",
  Dragon: "#6F35FC",
  Dark: "#141211",
  Steel: "#B7B7CE",
  Flying: "#8683FC",
  Shadow: "#3c4440",
  Unknown: "#636363",
  None: "#3a3a3a",
};

type TypeList = {
  name: string;
  url: string;
}[];

export default function ListOfTypes({ list }: { list: TypeList | string }) {
  if (typeof list === "string") {
    return (
      <Button bg={colors[list]} m={1} variant="solid">
        {list}
      </Button>
    );
  }

  return (
    <>
      {list.map((list, i) => (
        <Button
          fontWeight="bold"
          p={2}
          bg={colors[list.name]}
          m={1}
          variant="solid"
          key={`${list.name}-${i}`}
        >
          {(list.url && <Link href={`../../${list.url}`}>{list.name}</Link>) ||
            list.name}
        </Button>
      ))}
    </>
  );
}
