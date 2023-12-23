interface ICreditCard {
    percent: number;
    calcDate: Date;
    minimumPrice: number;
}

interface ITheCreditCard extends ICreditCard{
    id: string;
}