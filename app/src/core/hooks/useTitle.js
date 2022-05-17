import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Intera`;
    }, [title]);
};

export default useTitle;
