import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../slices/quoteSlice";
import { AppDispatch, RootState } from "../main"; 

const Quote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const quote = useSelector((state: RootState) => state?.quotes.quote);
    const status = useSelector((state:RootState) => state?.quotes.status);

    useEffect(() => {
        dispatch(fetchRandomQuote());
    }, [dispatch]);

    const handleFetchQuote = () => {
        dispatch(fetchRandomQuote());
    };

    return (

        <div className="flex items-center justify-center relative z-10 py-14 dark:bg-gray-800 bg-white min-h-[calc(100vh_-_81px)]">
        <div className="gap-6 mx-auto max-w-md w-full flex  flex-col bg-white dark:bg-gray-800 shadow-sm border-2 border-gray-400  dark:border-gray-500 p-8 rounded-lg">
        <div className="text-3xl text-black dark:text-white min-h-60 flex items-center justify-center">
            {status === "loading" ? (
            <div className="text-5xl">
                Loading...
            </div>
            ) : null}
            {quote && status !== "loading" ? <div>{quote?.content}</div> : null}
        </div>
        <button
            type="button"
            className="btn btn-primary w-52 mx-auto"
            onClick={() => handleFetchQuote()}
        >
            <span>Generate Quote</span>
        </button>
        </div>
        </div>

    );
};

export default Quote;
