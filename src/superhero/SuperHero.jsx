import React, { useEffect, useState } from "react";

const url = "https://www.superheroapi.com/api.php/b4ff3437ee65c6ae14a966f8f9aa83ac/search/a";
function SuperHero() {
    const [heroes, setHeroes] = useState([])
    const [query, setQuery] = useState("")
    async function fetchHeroes() {
        const resp = await fetch(url)
        const data = await resp.json()
        setHeroes(data.results)
    }
    useEffect(()=>{
        fetchHeroes()
    }, [])
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Super Hero</h1>
      <div className="search w-1/2 m-auto">
        <input type="search" className="border border-solid w-full m-4 p-2" onChange={(e)=>setQuery(e.target.value)} />
      </div>
      <div className="main flex justify-center flex-wrap gap-1">
        {
            heroes.filter(hero=>{
                return hero.name.toLowerCase().startsWith(query)
            }).map((hero, index)=>{
                console.log("hero", hero)
                return <div className="hero w-1/4">
                    <img src={hero.image.url} alt="" />
                    <h3>{hero.name}</h3>
                    <h4>{hero.biography['full-name']}</h4>
                    <p>{hero.biography['first-appearance']}</p>
                </div>
            })
        }
      </div>
    </div>
  );
}

export default SuperHero;
