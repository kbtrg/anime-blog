import classnames from "classnames"
import Link from "next/link"
import styles from "./index.module.scss"

type Props = {
  title: string
  description: string
  href: string
  className?: string;
}

const Card: React.FC<Props> = ({
  title,
  description,
  href,
  className = "",
}:Props) => {
  return (
    <section className={classnames(styles.container, className)}>
      <Link href={href}>
        <div className={styles.thumbnail}>
          {/* <Image src={""} alt={"イメージ１"} width={300} height={150}/> */}
          {title}
        </div>
        <div className={styles.description}>{description}</div>
      </Link>
    </section>
  )
}

export default Card