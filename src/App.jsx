import styles from './App.module.css';
import MyComponent from './MyComponent';
import Counter from './counter';
import Najjacibrojac from './najjacibrojac';
import Login from './login';

function App() {
  return (
    <>
      <div class={styles.App}>
        Ide gas Baka Prase
      </div>

      <Najjacibrojac/>
      <Login/>
    </>
  );
}

export default App;
