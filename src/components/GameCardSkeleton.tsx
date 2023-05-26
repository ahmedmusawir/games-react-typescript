import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height={"200px"} />
      <CardBody>
        <GameCardContainer>
          <SkeletonText />
        </GameCardContainer>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
