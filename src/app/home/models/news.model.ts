export interface InewsList {
    News: Inews[]
  }
  
  export interface Inews {
    id: string
    title: string
    content: string
    categoryID: string
    urlToImage: string
    description?: string
    publishedDate: string
    showOnHomepage: string
  }

  export interface InewsCategories {
    newsCategory: InewsCategory[]
  }
  
  export interface InewsCategory {
    id: number
    name: string
  }