import { useEffect } from "react"

function PageTitle({title}){

    useEffect(()=> {
        document.title = title
    },[title])



    return(
        <div>
            <p>Page got new title now: {title}</p>
        </div>
    )
}
export default PageTitle