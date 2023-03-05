import { GetStaticProps } from "next"
import Card from "~/components/molecules/Card"
import Layout from "~/components/templetes/Layouts"
import { client } from "~/libs/client"
import { Blog } from "~/libs/types"
import { cardDescriptions } from "~/libs/propaties"
import { useIsSP } from "~/libs/utils"

import styles from "./index.module.scss"

type Props = {
  blog: Blog[]
}

const Home: React.FC<Props> = ({
  blog
}) => {
  const isSP = useIsSP()

  return (
    <Layout>
      <section className={styles.container}>
        <section className={styles.titleBox}>
          <div>
            <p>絶対に損はさせません！</p>
            <p>僕のdアニメストアの{isSP && <br />}「お気に入り」を全公開！</p>
          </div>
        </section>

        <section className={styles.mainContent}>
          <Card
            title="全てのアニメ"
            description="おすすめのアニメを全列挙！（β版）"
            href="category"
            className={styles.allContents}
          />

          <div>作成中...</div>
          <div className={styles.cards}>
            {cardDescriptions.map((cardDescription, i) => {
              return (
                <Card 
                  key={i}
                  title={cardDescription.category}
                  description={cardDescription.description}
                  href={`/${cardDescription.id}`}
                />
              )
            })}
          </div>
          

          {/* {blog.map((blog, i) => (
            <li key={i}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))} */}
        </section>
      </section>
    </Layout>
  )
}

// SSGでMicroCMSからデータ取得
// export const getStaticProps: GetStaticProps = async () => {
//   const data = await client.get({
//     endpoint: process.env.SERVICE_ID as string
//   })

//   return {
//     props: {
//       blog: data.contents
//     }
//   }
// }

export default Home