import { createRef, useRef } from "react";

export function refModal(){
    const modalRef =createRef<HTMLDivElement>()//useRef(document.createElement("div"));

    return [modalRef];
}