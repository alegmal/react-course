import Button from "./Button";

import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
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
    <Section id="examples" title="Examples">
      <Tabs
        buttons={Object.keys(EXAMPLES).map((example) => (
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
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
