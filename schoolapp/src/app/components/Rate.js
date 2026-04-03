 "use client"
import { useState } from 'react';
const Rate = () => {

    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    return <>
        {likeCount} <button onClick={() => setLikeCount(likeCount + 1)}>+ </button>
        {dislikeCount} <button onClick={() => setDislikeCount(dislikeCount + 1)}>+ </button>
    
    
    </>
    
}
export default Rate;