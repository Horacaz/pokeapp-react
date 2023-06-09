import { Button, Link } from "@chakra-ui/react";

type MovesList = {
  name: string;
  url: string;
}[];

export default function ListOfMoves({ list }: { list: MovesList }) {
  return (
    <>
      {list.map((move, i) => (
        <Button
          m={1}
          colorScheme="blue"
          variant="solid"
          key={`${move.name}-${i}`}
        >
          <Link href={`../../${move.url}`}>{move.name}</Link>
        </Button>
      ))}
    </>
  );
}
