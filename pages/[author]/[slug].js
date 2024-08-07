import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import parse from 'html-react-parser';

dayjs.extend(relativeTime);

const pageSize = 6;

export default function Home() {
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getArticle();
    }, []);

    function getArticle() {
        setLoading(true);

        fetch(`https://dev.to/api/articles/dumebii/what-are-the-best-ai-writing-tools-for-productivity-in-2024-4n4e`)

            .then((response) => {
                return response.json();
            })
            .then((detail) => {
                setArticle(detail);
                setLoading(false);
            });
    }

    console.log({article})

    if (!article) return <div>loading</div>

    return (
        <div className="container mx-auto">
           <div>HELOO1</div>  
            <div>{article.title}</div>
            <div className="prose">{parse(article.body_html)}</div>
        </div>
    );
}
