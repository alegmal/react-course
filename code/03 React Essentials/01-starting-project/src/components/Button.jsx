export default function Button({ children, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
