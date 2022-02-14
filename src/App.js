import { MantineProvider } from "@mantine/core";
import { AppShell, Button, Container } from "@mantine/core";

import "./App.css";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: "light" }}>
      <AppShell
        padding="md"
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Container>
          <h1>react mantine template</h1>
          <Button>a button</Button>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
