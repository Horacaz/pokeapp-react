import { Button, Link, Grid } from "@chakra-ui/react";

type Move = {
  name: string;
  url: string;
};

export default function ListOfMoves({ list }: { list: Move[] }) {
  return (
    <Grid gridTemplateColumns="repeat(6, 1fr)" gap={2}>
      {list.map((move, i) => (
        <MoveButton name={move.name} url={move.url} key={`${move.name}-${i}`} />
      ))}
    </Grid>
  );
}

function MoveButton(props: Move) {
  return (
    <Button
      fontWeight="bold"
      m={1}
      p={2}
      backgroundColor={"brand.secondary"}
      variant="solid"
    >
      <Link color={"brand.background"} href={`../../${props.url}`}>
        {props.name}
      </Link>
    </Button>
  );
}
