import { Box, Text, VStack } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

const Sidebar = ({ articles }) => {
  return (
    <Box w="full" p={4} bg="gray.100" borderRadius="lg">
      <Text fontSize="2xl" mb={4}>
        Trending Articles
      </Text>
      <VStack spacing={4}>
        {articles.map((article, index) => (
          <ArticleCard key={index} title={article.title} description={article.description} imageUrl={article.imageUrl} />
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;