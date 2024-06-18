import './App.css';
import { ThemeProvider } from './modules/core/theme/theme.context';
import NavigationBar from './modules/core/components/navigation-bar/navigation-bar';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavigationBar></NavigationBar>
        <p>Test</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
