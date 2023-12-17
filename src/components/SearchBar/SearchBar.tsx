import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  InputRightAddon,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
type SearchType =
  | "pokemon"
  | "move"
  | "ability"
  | "type"
  | "generation"
  | string;

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState<SearchType>("pokemon");

  return (
    <InputGroup maxW={["xs", "sm", "md"]} m={2}>
      <InputLeftElement
        as={Link}
        to={`../../${select}/${search}`}
        reloadDocument
      >
        <SearchIcon
          color="brand.text"
          _hover={{ cursor: "pointer", color: "brand.primary" }}
        />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search by Name or ID"
        color={"brand.text"}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        fontSize={["xs", "sm", "md"]}
      />
      <InputRightAddon p={0} maxW={["xs", "sm", "md"]}>
        <Select
          p={0}
          fontWeight={"bold"}
          onChange={(e) => setSelect(e.target.value)}
          value={select}
          color={"brand.background"}
          fontSize={["xs", "sm", "md"]}
        >
          <option value="pokemon">Pokemon</option>
          <option value="generation">Generation</option>
          <option value="type">Type</option>
          <option value="move">Move</option>
          <option value="ability">Ability</option>
        </Select>
      </InputRightAddon>
    </InputGroup>
  );
}
