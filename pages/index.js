import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { useSearchParams } from "next/navigation";



const tags = [
    { value: "All", name: "All" },
    { value: "Phyton", name: "Phyton" },
    { value: "Github", name: "Github" },
    { value: "methods", name: "methods" },
    { value: "programming", name: "programming" },
    { value: "angular", name: "angular" },
    { value: "kotlin", name: "kotlin" },
    { value: "jpa", name: "jpa" },
    { value: "beginners", name: "beginners" },
    { value: "spring", name: "spring" },
    { value: "pytorch", name: "pytorch" },
];

export default function Page() {
    const [selectedCategory, setselectedCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [ended, setEnded] = useState(false);
    const [page, setPage] = useState(1);



    async function loadInitialArticles() {
        setLoading(true);
        const response = await fetch(`https://dev.to/api/articles?username=dumebii&tag=${selectedCategory}&per_page=3`);
        const tagArticles = await response.json();
        setArticles(tagArticles);
        setPage(1);   //butsaaj ehnii huudsan der ochhiin tuld

       
        setLoading(false);
    }

    async function loadMore() {
        setLoading(true);

        const nextPage = page + 1;

        setLoading(true);
        const response = await fetch(`https://dev.to/api/articles?username=dumebii&tag=${selectedCategory}&per_page=3&page=${nextPage}`)
        const nextArticles = await response.json();

        setArticles([...articles, ...nextArticles]);   //concat -tai tustei 
        setPage (nextPage);
        setLoading(false);      
    }


    useEffect(() => {
        loadInitialArticles();
    }, [selectedCategory]);

    // selectedCategory uurchlugduh ued loadArticles ajillana 

    console.log({articles})

    return (
        <div>
            <div> <img src="/Images/Header.png" alt="Header-Image" className=" rounded-lg"/></div>
            <div className="flex gap-4 mb-8 mt-8">
                {tags.map((tag) => (
                    <div key={tag.value} className={`cursor-pointer font-bold hover:text-orange-500 ${selectedCategory === tag.value ? "text-orange-600" : ""}`} onClick={() => setselectedCategory(tag.value)}>
                        {tag.name} 
                    </div>
                ))}
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
                {articles.map((item) => (
                    <ArticleCard key={item.id} article={item} />
                ))}
            </div>

            {
                !ended && (
                    <div className="py-16 text-center">
                        <button disabled={loading} className="btn btn-outline btn-success btn-active text-center " onClick={loadMore} >
                            {loading && <span className="loading loading-spinner loading-sm"></span>
                            }load more</button>
                    </div>
                )
            }
        </div>
    );
}
