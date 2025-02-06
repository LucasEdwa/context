import { useState } from "react";
import { IMessageContextType } from "./context/MessageContext";
import { ITheme, ThemeContext, themes } from "./context/ThemeContext";
import { Button } from "./components/Button";
import { TodoApp } from "./components/TodoApp";

function App(){
  const [someText, setSomeText] =useState<IMessageContextType>({
    text: "viva a vida",
    change: () => {},
  });
  const [theme, setTheme] = useState<ITheme>(themes.light);

  someText.change = () => {
    setSomeText({
      ...someText,
      text: "memento mori",
    });
  };
  theme.toggle = () => {
    setTheme(theme.name === "light" ? themes.dark : themes.light);
  };
  return(
    <>
      <ThemeContext.Provider value={theme}>
        <Button onClick={theme.toggle}>Toggle Theme to {
          theme.name === themes.light.name ? themes.dark.name : themes.light.name
          } </Button>
          <TodoApp />
      </ThemeContext.Provider>
    </>
  )
}
export default App;