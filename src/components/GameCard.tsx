import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { platform } from "os";
import React from "react";
import getCroppedImageUrl from "../services/image-url";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PLatformIconList from "./PLatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" width='300px'>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PLatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
