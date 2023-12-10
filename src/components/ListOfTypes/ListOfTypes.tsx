import { Button, Link } from "@chakra-ui/react";

type Colors = {
  [key: string]: string;
};

type Type = {
  name: string;
  url: string;
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
  Dark: "#1F1F1F",
  Steel: "#B7B7CE",
  Flying: "#8683FC",
  Shadow: "#3c4440",
  Unknown: "#636363",
  None: "#3a3a3a",
};

export default function ListOfTypes({ list }: { list: Type[] | string }) {
  if (typeof list === "string") {
    return (
      <Button
        bg={colors[list]}
        cursor="default"
        fontWeight="bold"
        m={1}
        p={2}
        variant="solid"
        fontSize={["sm", "md"]}
        _hover={{ bg: colors[list] }}
      >
        {list}
      </Button>
    );
  }

  return (
    <>
      {list.map((list, i) => (
        <TypeButton name={list.name} url={list.url} key={`${list.name}-${i}`} />
      ))}
    </>
  );
}

function TypeButton(props: Type) {
  return (
    <Button
      as={Link}
      href={`../../${props.url}`}
      m={1}
      _hover={{
        bg: "brand.primary",
        color: "brand.text",
        textDecoration: "none",
      }}
      fontWeight="bold"
      fontSize={["sm", "md"]}
      backgroundColor={colors[props.name]}
      variant="solid"
      whiteSpace={"normal"}
      color={"brand.background"}
    >
      {props.name}
    </Button>
  );
}
