import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

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
    const [ended, setEnded] = useState();


  

    async function loadArticles() {
        setLoading(true);
        const response = await fetch(`https://dev.to/api/articles?username=dumebii&tag=${selectedCategory}`)
        const tagArticles = await response.json();

        setArticles(tagArticles);
        setLoading(false);
    }

    useEffect(() => {
        loadArticles();
    }, [selectedCategory]);

    // selectedCategory uurchlugduh ued loadArticles ajillana 

    return (
        <div>
            <div className="flex gap-4">
                {tags.map((tag) => (
                    <div key={tag.value} className={`cursor-pointer font-bold hover:text-orange-500 ${selectedCategory === tag.value ? "text-orange-600" : ""}`} onClick={() => setselectedCategory(tag.value)}>
                        {tag.name}
                    </div>
                ))}
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
                {articles.map((item) => (
                    <div key={item.id} className="shadow-lg card bg-base-100">
                        <div className="card-body gap-6">
                            <div className="flex gap-2">
                                {item.tag_list.map(() => (
                                    <div className="badge badge-primary badge-outline"> <p>{item.tag_list[0]}</p></div>
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <Image src={item.social_image} width={500} height={500} className="aspect-video bg-slate-50" />
                            </div>
                            <Link href={item.path} >
                                {item.title}
                            </Link>
                            <div className="flex gap-6 items-center">
                                <Image src={item.user.profile_image_90} width={60} height={60} className="rounded-full" />
                                <div> {item.user.name}</div>
                                <div> {dayjs(item.published_at).fromNow()}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
