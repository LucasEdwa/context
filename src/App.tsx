import { useState } from "react";
import { IMessageContextType, MessageContext } from "./context/MessageContext";
import { ITheme, ThemeContext, themes } from "./context/ThemeContext";
import { Button } from "./components/Button";
import { TodoApp } from "./components/TodoApp";
import { AwesomeComponent } from "./components/AwesomeComponent";

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
          theme.name === themes.dark.name ? themes.light.name : themes.dark.name
          } </Button>
          <TodoApp />
          <MessageContext.Provider value={someText}>
            <AwesomeComponent />
          </MessageContext.Provider>

      </ThemeContext.Provider>

    </>
  )
}
export default App;