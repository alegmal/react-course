import { useState } from "react";
import Header from "./components/Header";
import Concept from "./components/Concept";
import Button from "./components/Button";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import headerImage from "./assets/react-core-concepts.png";

function App() {
  // const clickHandler = (title) => {
  //   console.log(title);
  //   console.log(description);
  //   console.log(code);
  // };

  const initialExample = EXAMPLES[Object.keys(EXAMPLES)[0]];
  const [currentTitle, setTitle] = useState(initialExample.title);
  const [currentDescription, setDescription] = useState(
    initialExample.description
  );
  const [currentCode, setCode] = useState(initialExample.code);

  return (
    <div>
      <Header image={headerImage} />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <Concept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>{currentTitle}</h2>
          <menu>
            {Object.keys(EXAMPLES).map((example) => (
              <Button
                key={EXAMPLES[example].title}
                onClick={() => (
                  setTitle(EXAMPLES[example].title),
                  setDescription(EXAMPLES[example].description),
                  setCode(EXAMPLES[example].code)
                )}
              >
                {EXAMPLES[example].title}
              </Button>
            ))}
          </menu>
          <div id="tab-content">
            <h3>{currentTitle}</h3>
            <p>{currentDescription}</p>
            <pre>
              <code>{currentCode}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
