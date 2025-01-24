import Invigilators from "../ContextComponents/Invigilators";
import { createContext } from "react";

export const ThemeProvider = createContext();

const UseContext = () => {
    return (
        <div>
            <ThemeProvider.Provider value={{sgpa:9.5,cgpa:6.5}}>
                <h1>This is a example for UseContext hook which is alternative for props drilling</h1>
                <h3>Students exams are done</h3>
                <Invigilators />
            </ThemeProvider.Provider>
        </div>
    )
}

export default UseContext;
