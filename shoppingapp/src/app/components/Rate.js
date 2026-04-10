"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const Rate = () => {

    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    return <>
        {likeCount}
        <Link href="" onClick={() => setLikeCount(likeCount + 1)}>
            <Image src="/like.png" width="24" height="24" alt="image"></Image>
        </Link>
        {dislikeCount}
        <Link href="" onClick={() => setDislikeCount(dislikeCount + 1)}>
            <Image src="/dislike.png" width="24" height="24" alt="image"></Image>
        </Link>


    </>

}
export default Rate;