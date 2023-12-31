import { Inter } from 'next/font/google'
import Header from './components/header'
import Body from "./components/body"
import Footer from "./components/footer"
import styles from "../styles/components/index.module.css"

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
  <ul className={styles.index_parent}>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </ul>
    )
}

export default Home;

