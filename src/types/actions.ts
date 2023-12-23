export interface IAction<T> {
    readonly type: T
}

export interface IPayloadAction<T, P> extends IAction<T> {
    readonly payload: P
}
export interface IPayloadArrayAction<T, P> extends IAction<T> {
    readonly payload: ReadonlyArray<P>
}

export type IdObject<I, O> = {
    id: I,
    obj: O
}

export type StringIdObject<O> = IdObject<string, O>

export interface IIdObjectAction<T, I, O> extends IAction<T> {
    readonly payload: IdObject<I, O>
}

export const theAction = <T>(type: T): IAction<T> => ({ type: type });
export const thePayloadAction = <T, P>(type: T, payload: P): IPayloadAction<T, P> => ({
    ...theAction(type),
    payload: payload
})

export const theIdObjectAction = <T, I, O>(type: T, id: I, obj: O): IIdObjectAction<T, I, O> =>
    thePayloadAction(type, { id, obj } as IdObject<I, O>);