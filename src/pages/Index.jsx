import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";

const articles = [
  {
    title: "Breaking News: Market Hits Record Highs",
    description: "The stock market reached new heights today as investors reacted positively to the latest economic data.",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    title: "Tech Giants Release New Gadgets",
    description: "Several major tech companies unveiled their latest products at the annual tech conference.",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    title: "Global Politics: New Developments",
    description: "World leaders met today to discuss the ongoing global issues and potential solutions.",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const trendingArticles = [
  {
    title: "Editor's Pick: Innovative Startups",
    description: "A look at some of the most innovative startups that are making waves in the industry.",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    title: "Health: Tips for a Better Lifestyle",
    description: "Experts share their tips on how to maintain a healthy and balanced lifestyle.",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          <Box flex="3">
            <VStack spacing={8}>
              {articles.map((article, index) => (
                <ArticleCard key={index} title={article.title} description={article.description} imageUrl={article.imageUrl} />
              ))}
            </VStack>
          </Box>
          <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
            <Sidebar articles={trendingArticles} />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;