import ApiService from "../apiService";
import StorageService from "../storageService";
import PokemonAppService from "../PokemonAppService";
import { IUnparsedPokemon } from "../../types/pokemon";

vi.mock("../../mappers/generationMapper");
vi.mock("../../mappers/pokemonMapper");
vi.mock("../../mappers/pokemonAbilityMapper");
vi.mock("../../mappers/pokemonListMapper");
vi.mock("../../mappers/pokemonMoveMapper");
vi.mock("../../mappers/pokemonSpeciesMapper");
vi.mock("../../mappers/pokemonTypeMapper");

const apiMock = {
  getPokemon: vi.fn(),
  getAbility: vi.fn(),
  getGeneration: vi.fn(),
  getType: vi.fn(),
  getMove: vi.fn(),
  getPokemonSpecies: vi.fn(),
  getPokemonList: vi.fn(),
} as unknown as ApiService;

const storageMock = {
  getPokemonList: vi.fn(),
  getPokemon: vi.fn(),
  savePokemonList: vi.fn(),
  savePokemon: vi.fn(),
  getPokemonTypes: vi.fn(),
  savePokemonTypes: vi.fn(),
  getPokemonSpecies: vi.fn(),
  savePokemonSpecies: vi.fn(),
  getGeneration: vi.fn(),
  saveGeneration: vi.fn(),
  getPokemonAbility: vi.fn(),
  savePokemonAbility: vi.fn(),
  getPokemonMoves: vi.fn(),
  savePokemonMoves: vi.fn(),
} as unknown as StorageService;

const pokemonAppService = new PokemonAppService(apiMock, storageMock);
describe("PokemonAppService", () => {
  describe("getPokemon", () => {
    test("getPokemon calls service.getPokemon", async () => {
      const pokemonName = "pikachu";
      await pokemonAppService.getPokemon(pokemonName);
      expect(storageMock.getPokemon).toHaveBeenCalledTimes(1);
    });

    test("getPokemon calls api.getPokemon and storage.savePokemon", async () => {
      storageMock.getPokemon = vi.fn(() => {
        throw new Error("Pokemon not found");
      });

      apiMock.getPokemon = vi.fn(
        async () => pokemonName as unknown as IUnparsedPokemon
      );

      const pokemonName = "pikachu";
      await pokemonAppService.getPokemon(pokemonName);
      expect(apiMock.getPokemon).toHaveBeenCalledTimes(1);
      expect(storageMock.savePokemon).toHaveBeenCalledTimes(1);
    });
  });

  describe("getAbility", () => {
    test("getAbility calls service.getAbility", async () => {
      const abilityName = "blaze";
      await pokemonAppService.getAbility(abilityName);
      expect(storageMock.getPokemonAbility).toHaveBeenCalledTimes(1);
    });

    test("getAbility calls api.getAbility and storage.savePokemonAbility", async () => {
      storageMock.getPokemonAbility = vi.fn(() => {
        throw new Error("Ability not found");
      });

      const abilityName = "blaze";
      await pokemonAppService.getAbility(abilityName);
      expect(apiMock.getAbility).toHaveBeenCalledTimes(1);
      expect(storageMock.savePokemonAbility).toHaveBeenCalledTimes(1);
    });
  });

  describe("getGeneration", () => {
    test("getGeneration calls service.getGeneration", async () => {
      const generationId = 1;
      await pokemonAppService.getGeneration(generationId);
      expect(storageMock.getGeneration).toHaveBeenCalledTimes(1);
    });

    test("getGeneration calls api.getGeneration and storage.saveGeneration", async () => {
      storageMock.getGeneration = vi.fn(() => {
        throw new Error("Generation not found");
      });

      const generationId = 1;
      await pokemonAppService.getGeneration(generationId);
      expect(apiMock.getGeneration).toHaveBeenCalledTimes(1);
      expect(storageMock.saveGeneration).toHaveBeenCalledTimes(1);
    });
  });

  describe("getMove", () => {
    test("getMove calls service.getMove", async () => {
      const moveId = 1;
      await pokemonAppService.getMove(moveId);
      expect(storageMock.getPokemonMoves).toHaveBeenCalledTimes(1);
    });

    test("getMove calls api.getMove and storage.savePokemonMoves", async () => {
      storageMock.getPokemonMoves = vi.fn(() => {
        throw new Error("Move not found");
      });

      const moveId = 1;
      await pokemonAppService.getMove(moveId);
      expect(apiMock.getMove).toHaveBeenCalledTimes(1);
      expect(storageMock.savePokemonMoves).toHaveBeenCalledTimes(1);
    });
  });

  describe("getPokemonSpecies", () => {
    test("getPokemonSpecies calls service.getPokemonSpecies", async () => {
      const speciesId = 1;
      await pokemonAppService.getSpecies(speciesId);
      expect(storageMock.getPokemonSpecies).toHaveBeenCalledTimes(1);
    });

    test("getPokemonSpecies calls api.getPokemonSpecies and storage.savePokemonSpecies", async () => {
      storageMock.getPokemonSpecies = vi.fn(() => {
        throw new Error("Species not found");
      });

      const speciesId = 1;
      await pokemonAppService.getSpecies(speciesId);
      expect(apiMock.getPokemonSpecies).toHaveBeenCalledTimes(1);
      expect(storageMock.savePokemonSpecies).toHaveBeenCalledTimes(1);
    });

    describe("getPokemonList", () => {
      test("getPokemonList calls service.getPokemonList", async () => {
        const offset = 0;
        const limit = 20;
        await pokemonAppService.getPokemonList(limit, offset);
        expect(storageMock.getPokemonList).toHaveBeenCalledTimes(1);
      });

      test("getPokemonList calls api.getPokemonList and storage.savePokemonList", async () => {
        storageMock.getPokemonList = vi.fn(() => {
          throw new Error("Pokemon not found");
        });

        const offset = 0;
        const limit = 20;
        await pokemonAppService.getPokemonList(limit, offset);
        expect(apiMock.getPokemonList).toHaveBeenCalledTimes(1);
        expect(storageMock.savePokemonList).toHaveBeenCalledTimes(1);
      });
    });
  });
});
