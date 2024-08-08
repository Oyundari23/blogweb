import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import parse from 'html-react-parser';
import { useRouter } from 'next/router'


dayjs.extend(relativeTime);

const pageSize = 6;

export default function Home() {
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { author, slug } = router.query;

    useEffect(() => {
        if (router.isReady) {
            getArticle();
        }
    }, [router.isReady]);

   async function getArticle() {
        setLoading(true);

        const response = await fetch(`https://dev.to/api/articles/${author}/${slug}`)
        const detail = await response.json();      
            setArticle(detail);
            setLoading(false);     
      }

    if (!article) return <div>loading</div>

    return (
        <div className="container mx-auto">

            <div>{article.title}</div>
            <div className="prose">{parse(article.body_html)}</div>
        </div>
    );
}
