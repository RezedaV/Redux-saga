export interface TPerson {
    id?: number,
    name?: string,
}

export interface TPeoplesState {
    page?: number,
    search?:string,
    list: {
        count?: number,
        next?:string,
        previous?:any,
        results?:TPerson[]
    }
}
