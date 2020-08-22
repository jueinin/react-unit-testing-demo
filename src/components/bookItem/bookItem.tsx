import React from "react";
export type BookItemBaseProperty ={
    author: string;
    bookId: number;
    comments: number;
    goodComments: number;
    imgUrl: string;
    price: number;
    title: string;
}

export interface BookItemProps extends BookItemBaseProperty {
    className?: string;
    onClick?: () => void;
}

const BookItem: React.FC<BookItemProps> = (props) => {
    return <div
        key={props.bookId} onClick={props.onClick}
        className={"pb-1 mb-1 w-full grid gap-6 grid-cols-10 hover:shadow-md cursor-pointer border-b " + props.className || ''}
    >
        <div className="col-span-3 ">
            <img src={props.imgUrl} alt="book cover" className="h-40 w-full"/>
        </div>
        <div className="grid grid-cols-1 content-between col-span-7 py-2 pr-1">
            <h4 className="text-lg h-12 truncate-2-lines">{props.title}</h4>
            <h5 className="text-sm text-gray-700">{props.author}</h5>
            <span className="font-bold text-lg" style={{color: "red"}}>
                      {props.price}元
                    </span>
            <span className="text-sm text-gray-700">
                      {props.comments === 0 ? 0 : (props.goodComments / props.comments).toFixed(2)}
                %好评<span className="ml-6">{props.comments}人</span>
                    </span>
        </div>
    </div>;
};
BookItem.defaultProps = {
    onClick: () => {
    }
};
export default BookItem;
