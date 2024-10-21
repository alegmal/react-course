export default function Tabs({ children, buttons, TabsContainer }) {
//   const TabsContainer = tabsContainer;
  return (
    <>
      <TabsContainer>{buttons}</TabsContainer>
      {children}
    </>
  );
}
