export interface ITodo {
    id?: string
    name: string
    description: string
    isDone: Boolean,
    createdAt?: string,
    updatedAt?: string,
    owner?: string
}