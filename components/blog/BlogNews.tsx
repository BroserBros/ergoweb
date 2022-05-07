import Link from "next/link";
import { FormattedDate } from "react-intl";
import Button from "../Button";

type NewsPostProps = {
  title: string;
  subtitle?: string;
  date?: string;
  url: string;
};

function NewsPost({ title, subtitle, date, url }: NewsPostProps) {
  return (
    <>
      {url ? (
        <Link key={url} href={url}>
          <div className="min-w-[300px] h-[300px] rounded-xl p-6 md:px-20 md:py-16 blog-news relative md:min-w-[610px] md:h-[400px] cursor-pointer">
            <p className="text-[12px] md:text-[14px]">
              <b>
                <FormattedDate
                  value={date}
                  day="numeric"
                  month="long"
                  year="numeric"
                />
              </b>
            </p>
            <p className="text-[16px] md:text-[24px] font-subtitle-3-bold text-brand-orange dark:text-brand-orange my-2 text-clip">
              {title.length > 60 ? title.substring(0, 60) + "..." : title}
            </p>
            {subtitle ? (
              <p className="text-[12px] md:text-[16px] text-[#807e7e] dark:text-[#807e7e] mb-2 text-clip">
                {subtitle?.length > 350
                  ? subtitle?.substring(0, 320) + "..."
                  : subtitle}
              </p>
            ) : (
              ""
            )}
            <div className="-ml-4 absolute bottom-4 md:bottom-12">
              <Button
                text="READ"
                url={url}
                newTab={true}
                underline={true}
                textColor="brand-orange"
                background={false}
              />
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}

type Props = {
  news: any;
};

export default function BlogNews({ news }: Props) {
  return (
    <div>
      <h1>News</h1>
      <div className="flex overflow-x-auto space-x-8 mt-8 no-scrollbar relative">
        {news?.map((post: any) => (
          <NewsPost key={post.id} {...post.attributes} />
        ))}
      </div>
    </div>
  );
}
