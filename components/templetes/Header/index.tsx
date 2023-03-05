import Link from "next/link";
import styles from "./index.module.scss";

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <Link href={"/"}>kuboryuアニメブログ</Link>
      </div>
    </header>
  )
}

export default Header