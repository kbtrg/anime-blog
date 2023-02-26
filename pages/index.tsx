import { GetStaticProps } from "next"
import styles from "./index.module.scss"

import { client } from "~/libs/client"
import { Blog } from "~/libs/types"
import Link from "next/link"

type Props = {
  blog: Blog[]
}

const Home: React.FC<Props> = ({
  blog
}) => {

  return (
    <section className={styles.container}>
      {blog.map((blog, i) => (
        <li key={i}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </section>
  )
}

// SSGでMicroCMSからデータ取得
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: process.env.SERVICE_ID as string
  })
    
  return {
    props: {
      blog: data.contents
    }
  }
}

export default Home