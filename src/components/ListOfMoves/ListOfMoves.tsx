import { Button, Link, Grid } from "@chakra-ui/react";

type MovesList = {
  name: string;
  url: string;
}[];

export default function ListOfMoves({ list }: { list: MovesList }) {
  return (
    <Grid gridTemplateColumns="repeat(6, 1fr)" gap={2}>
      {list.map((move, i) => (
        <Button
          fontWeight="bold"
          m={1}
          p={2}
          colorScheme="blue"
          variant="solid"
          key={`${move.name}-${i}`}
        >
          <Link href={`../../${move.url}`}>{move.name}</Link>
        </Button>
      ))}
    </Grid>
  );
}
