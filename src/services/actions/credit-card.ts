import { IIdObjectAction, IPayloadAction, StringIdObject, theAction, theIdObjectAction, thePayloadAction } from "../../types/actions";

export const ADD_CREDIT_CARD:'ADD_CREDIT_CARD' = 'ADD_CREDIT_CARD';
export const REMOVE_CREDIT_CARD:'REMOVE_CREDIT_CARD' = 'REMOVE_CREDIT_CARD';
export const UPDATE_CREDIT_CARD:'UPDATE_CREDIT_CARD'='UPDATE_CREDIT_CARD';


export interface IAddCreditCardAction extends IPayloadAction<typeof ADD_CREDIT_CARD, ICreditCard>{};// = (item:ICreditCard)=> ({type: ADD_CREDIT_CARD, item:item});
export interface IRemoveCreditCardAction extends IPayloadAction<typeof REMOVE_CREDIT_CARD, string>{};
export interface IUpdateCreditCardAction extends IIdObjectAction<typeof UPDATE_CREDIT_CARD,string, ICreditCard>{};

export type TCreditCardActions = IAddCreditCardAction | IRemoveCreditCardAction | IUpdateCreditCardAction;

export const AddCreditCardAction= (item:ICreditCard):IAddCreditCardAction => thePayloadAction(ADD_CREDIT_CARD,item);
export const RemoveCreditCardAction =(id:string):IRemoveCreditCardAction=>thePayloadAction(REMOVE_CREDIT_CARD, id);
export const UpdateCreditCardACtion =(id:string, item:ICreditCard)=>theIdObjectAction(UPDATE_CREDIT_CARD,id, item);

//const RemoveCreditCardAction = (id)=> ({type: REMOVE_CREDIT_CARD, id: id});

