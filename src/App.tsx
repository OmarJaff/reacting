import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { SrearchAndShortList } from "./components/SrearchAndShortList";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { puppies } from "./data/puppies";

export function App() {
  return  (
     <PageWrapper>

        <Container>

        <Header />
         <Main />
      </Container>

   </PageWrapper>
  )

}

function Main() {
    return (
      <main>
    
        <SrearchAndShortList />
        <PuppiesList puppies={puppies} />
        <NewPuppyForm />
    
    </main>

    )
}