import { useState } from "react";
import Header from "./components/Header/Header";
import Concept from "./components/Concept";
import Button from "./components/Button";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import headerImage from "./assets/react-core-concepts.png";

function App() {
  const [currentTitle, setTitle] = useState(null);
  const [currentDescription, setDescription] = useState(null);
  const [currentCode, setCode] = useState(null);

  let tabContent = <p>Please select a topic.</p>;

  if (currentTitle) {
    tabContent = (
      <div id="tab-content">
        <h3>{currentTitle}</h3>
        <p>{currentDescription}</p>
        <pre>
          <code>{currentCode}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header image={headerImage} />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <Concept
                key={concept.title}
                {...concept}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((example) => (
              <Button
                key={EXAMPLES[example].title}
                onClick={() => (
                  setTitle(EXAMPLES[example].title),
                  setDescription(EXAMPLES[example].description),
                  setCode(EXAMPLES[example].code)
                )}
                isSelected={currentTitle === EXAMPLES[example].title}
              >
                {EXAMPLES[example].title}
              </Button>
            ))}
          </menu>
          {tabContent}
          {/* <div id="tab-content">
            <h3>{currentTitle}</h3>
            <p>{currentDescription}</p>
            <pre>
              <code>{currentCode}</code>
            </pre>
          </div> */}
        </section>
      </main>
    </>
  );
}

export default App;
