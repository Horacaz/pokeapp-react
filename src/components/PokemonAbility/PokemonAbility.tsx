import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import useGetAbility from "../../hooks/useGetAbility";
import { Heading, Text } from "@chakra-ui/react";
import ListOfPokemon from "./ListOfPokemon";

const Span = styled.span`
  font-weight: bolded;
`;

export default function PokemonAbility() {
  const id = useParams().id;
  const { loading, data, error } = useGetAbility(id as string);
  const PokemonAbility = data;

  return (
    <>
      <Heading as="h1" size="xl">
        Pokemon Ability
      </Heading>
      {PokemonAbility && (
        <>
          <Heading as="h2" size="lg">
            <Span>{PokemonAbility.displayName}</Span>
          </Heading>
          <Heading as="h2" size="lg">
            Effect
          </Heading>
          <Text>{PokemonAbility.ability.effect}</Text>
          <Heading as="h2" size="lg">
            Pokedex Entry
          </Heading>
          <Text>{PokemonAbility.ability.description}</Text>
          <Heading as="h2" size="lg">
            Generation
          </Heading>
          <Text>
            This ability was first introduced on{" "}
            <Span>{PokemonAbility.generation.name}</Span>
          </Text>
          <Heading as="h2" size="lg">
            Pokemon
          </Heading>
          <Text>
            <Span>Pokemon that share this ability</Span>
          </Text>
          <ListOfPokemon list={PokemonAbility.pokemon} />
        </>
      )}
    </>
  );
}
