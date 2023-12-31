export interface Islides {
    slides: Islide[]
  }

export interface Islide {
    id: number
    brief: string
    order: number
    title: string
    imgUrl: string
    itemUrl: string
    category: string
    videoUrl: string
    colorCode: string
  }