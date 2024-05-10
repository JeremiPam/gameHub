import { Button, HStack, Img, List, ListItem } from "@chakra-ui/react";
import useGenres, { genre } from "../hooks/useGenre";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <List>
        {data.map((el) => (
          <ListItem key={el.id}>
            <HStack>
              <Img src={el.image_background} boxSize={"5%"}></Img>
              <Button>{el.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
