import Concept from "./Concept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(props) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <Concept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
