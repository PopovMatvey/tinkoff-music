import React, { useState } from "react";

export function useModalFlag() {
    const [modalFlag, setModalFlag] = useState(true);

    return { modalFlag, setModalFlag }
}