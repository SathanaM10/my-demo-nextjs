import { useRouter } from "next/router"
import Link from "next/link";

export default function Comment(){

    const router = useRouter();
    const {id,commentId} = router.query;

    return <div> 
        <h1>Posts ID : {id}</h1>
        <h1>Comment ID : {commentId}</h1>
    </div>
}