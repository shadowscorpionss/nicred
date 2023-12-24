import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../types/app-redux-thunk";

export const CreditCardList: FC = () => {
    var dispatch = useAppDispatch()
    var { cards } = useAppSelector(store => store.creditCards)
    return (
        <ul>
            ({
                cards.map(c => (
                    <li>
                        <div>
                            {c.percent}
                        </div>
                        <div>
                            {c.minimumPrice}
                        </div>
                        <div>
                            {c.calcDate.toDateString()}
                        </div>
                        <div>
                            
                        </div>
                    </li>
                ))
            })
        </ul>
    );
}