import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

import headerImage from "./assets/react-core-concepts.png";

function App() {
  return (
    <>
      <Header image={headerImage} />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
