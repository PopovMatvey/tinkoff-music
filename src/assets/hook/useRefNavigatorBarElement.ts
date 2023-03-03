import { useRef } from "react";

// Элемент div (Range Bar)
export function useRefNavigatorBarElement(){
    const navigatorBarElement = useRef(document.createElement("div"));

    return {navigatorBarElement}; 
}