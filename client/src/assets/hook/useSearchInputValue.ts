import { useState } from "react";

export function useSearchInputValue(){
    const [searchInputValue, setSearchInputValue] = useState("");

    return {searchInputValue, setSearchInputValue}
}