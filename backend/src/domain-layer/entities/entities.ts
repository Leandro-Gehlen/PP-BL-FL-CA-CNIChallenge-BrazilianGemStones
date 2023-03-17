export type User = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    token?: string
    refreshToken?: string
    createdAt?: any
    updatedAt?: any

}

export type Stone = {
    id: string
    name: string
    imgStoneURL: string
    imgStoneLapidationURL: string
    description: string
}