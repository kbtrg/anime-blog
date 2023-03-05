export type Blog = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string
  subTitle: string
  sammary: string
}

export type Category =
  | "女の子の日常系"
  | "趣味系"
  | "異世界転生系"
  | "主人公最強系"
  | "バトル系"
  | "スポーツ系"
  | "グルメ系"
  | "ラブコメ系"
  | "変わったテイスト系"

export type CardDescriptions = {
  id: string
  category: Category,
  description: string
}