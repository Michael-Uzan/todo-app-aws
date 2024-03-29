import { IFilterBy } from "./IFilterBy";
import { GraphQLResult } from "./IGraphqlResult";
import { ITodo } from "./ITodo";

export interface TodoAction {
    type: string,
    todos?: ITodo[] | GraphQLResult | any, /* I Had a problen define todos so i use any :( */
    updatedTodo?: ITodo,
    filterBy?: IFilterBy
}

export interface TodoState {
    todos: null | ITodo[] | any, /* I Had a problen define todos so i use any :( */
    filterBy: IFilterBy | null | undefined
}