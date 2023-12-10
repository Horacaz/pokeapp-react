import { Button, Link, Grid } from "@chakra-ui/react";

type Move = {
  name: string;
  url: string;
};

export default function ListOfMoves({ list }: { list: Move[] }) {
  return (
    <Grid gridTemplateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={2}>
      {list.map((move, i) => (
        <MoveButton name={move.name} url={move.url} key={`${move.name}-${i}`} />
      ))}
    </Grid>
  );
}

function MoveButton(props: Move) {
  return (
    <Button
      textAlign={"center"}
      as={Link}
      href={`../../${props.url}`}
      _hover={{
        bg: "brand.primary",
        color: "brand.text",
        textDecoration: "none",
      }}
      fontWeight="bold"
      backgroundColor={"brand.accent"}
      color={"brand.background"}
      variant="solid"
      fontSize={["xs", "sm", "md"]}
      width="100%"
      whiteSpace={"normal"}
    >
      {props.name}
    </Button>
  );
}
