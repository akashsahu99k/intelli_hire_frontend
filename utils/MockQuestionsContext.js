import React, { createContext, useState } from "react";

export const MockQuestionsContext = createContext();

export const MockQuestionsProvider = ({ children }) => {
    const [mockQue, setMockQue] = useState();
    const [showForm , setShowForm] = useState(false)
    return (
        <MockQuestionsContext.Provider value={{ mockQue, setMockQue , showForm , setShowForm }}>
            {children}
        </MockQuestionsContext.Provider>
    );
};
