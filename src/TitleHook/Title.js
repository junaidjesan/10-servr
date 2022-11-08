import { useEffect } from "react"


const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-junaid jesan's diary`
    },[title])
}

export default useTitle;