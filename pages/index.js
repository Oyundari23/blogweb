import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    fetch("https://dev.to/api/articles?username=dumebii")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  console.log({ articles });

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4 ">
        {articles.map((item) => (
          <div className="card-body">
            <div key={item.id} className="shadow-lg card bg-base-100">
              <Link href={item.url} target="_blank">
                {item.title}
              </Link>
            </div>
          </div>  
        ))}
        <button className="btn btn-active ">button</button>
      </div>
    </div>
  );
}
