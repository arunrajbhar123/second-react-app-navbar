import logo from "./logo.svg";
import "./App.css";
import {Logo,Link,Button} from "./components/navbar";
import styles from './styles/app.module.css'

function App() {

  return (
   <div className={styles.navbar}>
     <Logo/>
     <Link/>
     <Button/>
   </div>
 
  )
}

export default App;
