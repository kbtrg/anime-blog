import classnames from "classnames"
import Image from "next/image"
import styles from "./index.module.scss"

type Props = {
  description: string
  className?: string;
}

const Card: React.FC<Props> = ({
  description,
  className = "",
}:Props) => {
  return (
    <section className={classnames(styles.container, className)}>
      <div className={styles.thumbnail}>
        <Image src={""} alt={"イメージ１"} width={300} height={150}/>
      </div>
      <div className={styles.description}>{description}</div>
    </section>
  )
}

export default Card