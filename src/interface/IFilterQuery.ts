export interface IFilterQuery {
    isDone?: {
        eq: boolean
    },
    name: {
        contains: string
    }
}