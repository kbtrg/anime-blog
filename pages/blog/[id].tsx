import classnames from "classnames"
import { GetStaticProps } from "next";
import Layout from "~/components/templetes/Layouts";
import { client } from "~/libs/client";
import { Blog } from "~/libs/types"
import styles from "./index.module.scss"

type Props = {
  blog: Blog
}

const Blog: React.FC<Props> = ({
  blog
}: Props) => {
  return (
    <Layout>
      <section className={styles.container}>
        <div dangerouslySetInnerHTML={{__html: blog.body}} />
      </section>
    </Layout>
  )
}

// contentIdに応じたblog記事を取得
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const data = await client.get({
    endpoint: process.env.SERVICE_ID as string,
    contentId: id
  });

  return {
    props: {
      blog: data,
    },
  };
};

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "anime-blog" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export default Blog