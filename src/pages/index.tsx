import Randomizer from "../components/randomizer";
import { useEffect, useState } from "react";
import { data, DataTypes } from "../data";
import Card from "../components/card";
import { Link } from "react-router-dom";
import Button from "../components/button"; 

function Games() {
  const [results, setResults] = useState<DataTypes[]>(data);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (query.length > 0) {
      const found = data.filter((game) => {
        return query.toLowerCase() === ""
          ? game
          : game.title.toLowerCase().includes(query.toLowerCase());
      });
      setResults(found);
    } else {
      setResults(data);
    }
  }, [query]);

  return (
    <>
      <h2 className="text-2xl">Games</h2>
      <div className="flex flex-col gap-2 justify-center items-center">  <Randomizer />
        <input
          type="text"
          className="bg-[#111] rounded-xl text-sm outline-none px-6 py-2 my-2 transition duration-75 border-b-[1.75px] border-b-black focus:border-b-[#83c9e5]"
          placeholder="Search games.."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          
        />
        <Link to="https://github.com/cosmic-city/cosmic-city.github.io/issues">
        <Button look="brand" className="mt-2">
          Request a game
        </Button>
      </Link>
      </div>
      <div className="flex  justify-center">
        <div className="flex flex-wrap max-w-[80vw] my-2 gap-4">
          {results.map((game) => {
            return <Card id={game.id} />;
          })}
        </div>
      </div>
	  
	  <div className="flex flex-col gap-2 justify-center items-center">
	  <h2>Slope Unblocked: A Thrilling Online Game</h2>
<p><strong>Slope Unblocked</strong> is an exhilarating online game that has captivated players with its fast-paced and challenging gameplay. The objective of the game is simple: navigate a rolling ball down a steep, neon-lit slope while avoiding various obstacles. The game is known for its simplicity yet intense difficulty, making it a favorite among those seeking a quick adrenaline rush.</p>
<p>The controls are straightforward, requiring only the use of the arrow keys to steer the ball. However, mastering the game is no easy feat. The slope is riddled with pitfalls, sharp turns, and moving obstacles that demand quick reflexes and precise movements. As the game progresses, the speed of the ball increases, adding to the challenge and excitement.</p>
<p>One of the key attractions of Slope Unblocked is its accessibility. The game can be played directly in a web browser without the need for downloads or installations, making it perfect for quick gaming sessions during breaks or free periods. This accessibility also means that players can enjoy the game on various devices, from desktop computers to tablets and smartphones.</p>
<p>Another appealing feature of Slope Unblocked is its minimalistic yet vibrant design. The neon graphics and pulsating soundtrack create an immersive experience that keeps players engaged and coming back for more. The game&rsquo;s leaderboard feature also adds a competitive element, encouraging players to improve their skills and achieve higher scores.</p>
<p>Overall, Slope Unblocked is a thrilling and addictive game that offers endless entertainment. Whether you're a casual gamer or a hardcore enthusiast, Slope Unblocked is sure to provide a fun and challenging experience.</p>
	  </div>
	  
    </>
  );
}

export default Games;
