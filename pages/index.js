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
        setArticles( data );
      });
  }, []);   

  console.log ({articles});
 
  return (
  <div className="">
    {articles.map((item) => (
      <div key={item.id}>
        <Link href={item.url} target="_blank">
          {item.title}
        </Link>
      </div>    
    ))}
    <button className="btn">button</button>
  </div>
  );
}
