import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import FeedbackItemsContextProvider from "../contexts/FeedbackItemsContextProvider";

function App() {
  return (
    <div className="app">
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
