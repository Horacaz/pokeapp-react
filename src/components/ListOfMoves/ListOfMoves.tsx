import { Button, Link, Grid } from "@chakra-ui/react";

type Move = {
  name: string;
  url: string;
};

export default function ListOfMoves({ list }: { list: Move[] }) {
  return (
    <Grid gridTemplateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={1}>
      {list.map((move, i) => (
        <MoveButton name={move.name} url={move.url} key={`${move.name}-${i}`} />
      ))}
    </Grid>
  );
}

function MoveButton(props: Move) {
  return (
    <Link whiteSpace={"normal"} href={`../../${props.url}`}>
      <Button
        _hover={{ bg: "brand.primary", color: "brand.background" }}
        fontWeight="bold"
        backgroundColor={"brand.accent"}
        color={"brand.primary"}
        variant="solid"
        fontSize={["xs", "sm", "md"]}
        width="100%"
      >
        {props.name}
      </Button>
    </Link>
  );
}
