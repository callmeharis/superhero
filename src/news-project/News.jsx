import React, { useEffect, useState } from "react";

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=41e3caec42e44bdb897ebaa4a1226fa4";
function News() {
  const [news, setNews] = useState([]);
  async function fetchNews() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.articles);
    setNews(data.articles);
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold">News</h1>
      <div className="flex flex-wrap">
        {news.map((meriNews) => {
          return (
            <section class="text-gray-600 body-font w-1/3">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src={meriNews.urlToImage}
                      />
                    </div>
                    <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                      {meriNews.title}
                    </h2>
                    <p class="text-base leading-relaxed mt-2">
                      {meriNews.description}
                    </p>
                    <a
                      target="_blank"
                      href={meriNews.url}
                      class="text-indigo-500 inline-flex items-center mt-3"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default News;
