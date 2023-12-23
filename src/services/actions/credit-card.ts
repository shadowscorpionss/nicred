import {v4 as uuid4} from 'uuid';

import { IIdObjectAction, IPayloadAction, theIdObjectAction, thePayloadAction } from "../../types/actions";

export const ADD_CREDIT_CARD:'ADD_CREDIT_CARD' = 'ADD_CREDIT_CARD';
export const REMOVE_CREDIT_CARD:'REMOVE_CREDIT_CARD' = 'REMOVE_CREDIT_CARD';
export const UPDATE_CREDIT_CARD:'UPDATE_CREDIT_CARD'='UPDATE_CREDIT_CARD';


export interface IAddCreditCardAction extends IPayloadAction<typeof ADD_CREDIT_CARD, ITheCreditCard>{};
export interface IRemoveCreditCardAction extends IPayloadAction<typeof REMOVE_CREDIT_CARD, string>{};
export interface IUpdateCreditCardAction extends IIdObjectAction<typeof UPDATE_CREDIT_CARD,string, ITheCreditCard>{};

export type TCreditCardActions = IAddCreditCardAction | IRemoveCreditCardAction | IUpdateCreditCardAction;

export const addUniqueId = (item: ICreditCard): ITheCreditCard => {
    return { ...item, id: uuid4() };
}

export const AddCreditCardAction= (item:ICreditCard):IAddCreditCardAction => thePayloadAction(ADD_CREDIT_CARD, addUniqueId(item));
export const RemoveCreditCardAction =(id:string):IRemoveCreditCardAction=>thePayloadAction(REMOVE_CREDIT_CARD, id);
export const UpdateCreditCardACtion =(id:string, item:ITheCreditCard)=>theIdObjectAction(UPDATE_CREDIT_CARD,id, item);


