
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export function ArticleCard({ article }) {
   return ( <div key={article.id} className="shadow-lg card bg-base-100">
        <div className="card-body gap-6">
            <div className="flex gap-2">
                {article.tag_list.map(() => (
                    <div className="badge badge-primary badge-outline"> <p>{article.tag_list[0]}</p></div>
                ))}
            </div>
            <div className="flex justify-center">
                <Image src={article.social_image} width={500} height={500} className="aspect-video bg-slate-50" />
            </div>
            <Link href={article.path} >
                {article.title}
            </Link>
            <div className="flex gap-6 items-center">
                <Image src={article.user.profile_image_90} width={60} height={60} className="rounded-full" />
                <div> {article.user.name}</div>
                <div> {dayjs(article.published_at).fromNow()}</div>
            </div>
        </div>
    </div>
)};