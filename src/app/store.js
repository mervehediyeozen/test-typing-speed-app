import { configureStore } from "@reduxjs/toolkit";
import  testReducer  from "../redux/testSlice";

export const store = configureStore ({

    reducer: {
        test : testReducer
    }
})