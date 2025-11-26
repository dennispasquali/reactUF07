export type TPosts = IPost[];

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}


export type TPhotos = IPhotos[]

export interface IPhotos {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}


export type ListaUtenti = Utente[];

export interface Utente {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
