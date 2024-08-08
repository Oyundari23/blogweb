import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

const pageSize = 6;

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState (false);
  const [loading, setLoading] = useState (false);

  // const = [{item.tag_list}]

    useEffect(() => {
      loadMore();
    }, []);

   async function loadMore() {
     setLoading(true);
   const response = await fetch (`https://dev.to/api/articles?username=dumebii&page=${page}&per_page=${pageSize}`)
   const newArticles = await response.json();

   const updatedArticles = articles.concat(newArticles);

        setArticles(updatedArticles);
        setPage ( page +1 );
        if (newArticles.length < pageSize) {
          setEnded (true);
        }
        setLoading(false);
  }

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        {articles.map((item) => (
          <div key={item.id} className="shadow-lg card bg-base-100">
            <div className="card-body gap-3">
              <Image src={item.social_image} width={500} height={500} className="aspect-video bg-slate-50" />
              <div className="badge badge-primary badge-outline"> <p>{item.tag_list[0]}</p></div>
              <Link href={item.path} >
                {item.title}
              </Link>
              <div className="flex gap-4 items-center">
                <Image src={item.user.profile_image_90} width={60} height={60} className="rounded-full" />
                <div> {item.user.name}</div>
                <div> {dayjs(item.published_at).fromNow() }</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {
        !ended && (
          <div className="py-16 text-center">
            <button disabled={loading} className="btn btn-outline btn-success btn-active text-center " onClick={loadMore} >
              {loading &&  <span className="loading loading-spinner loading-sm"></span>
              }load more</button>
           
          </div>          
        )
      }
    </div>
  );
}
