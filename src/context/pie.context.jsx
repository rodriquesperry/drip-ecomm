import { createContext, useState } from 'react'

export const PieDataContext = createContext({
    pieData: {};
});

export const PieDataProvider = ({ children }) => {

    const [pieData, setPieData] = useSate({});

    console.log(pieData);

    return(
        <PieDataContext.Provider value={value}>
            {children}
        </PieDataContext.Provider>
    )
}