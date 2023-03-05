export type Category =
  | "女の子の日常系"
  | "趣味系"
  | "異世界転生系"
  | "主人公最強系"
  | "バトル系"
  | "スポーツ系"
  | "変わったテイスト系"

export type CardDescriptions = {
  category: Category,
  description: string
}