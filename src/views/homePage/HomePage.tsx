import { SearchForm } from "@/src/features/search";
import { IHomePageProps } from "./types"
import styles from './HomePage.module.css';

export const HomePage = (props : IHomePageProps) : JSX.Element => {
  
  return (
  <section {...props} className={styles.homePage}>
    <SearchForm />
  </section>
)
}

export default HomePage;