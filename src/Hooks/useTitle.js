import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Green Foods`
    }, [title])
}

export default useTitle;