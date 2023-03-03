import { useState } from "react";

// Флаг для модального окна (Булево)
export function useModalFlag() {
    const [modalFlag, setModalFlag] = useState(false);

    return { modalFlag, setModalFlag }
}