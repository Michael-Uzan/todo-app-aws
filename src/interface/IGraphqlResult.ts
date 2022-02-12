export interface GraphQLResult {
    data?: Record<string, any>;
    errors?: [object];
    extensions?: {
        [key: string]: any;
    };
}