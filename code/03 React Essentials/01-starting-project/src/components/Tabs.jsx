export default function Tabs({ children, buttons, TabsContainer = "menu" }) {
  //   const TabsContainer = tabsContainer;
  return (
    <>
      <TabsContainer>{buttons}</TabsContainer>
      {children}
    </>
  );
}
