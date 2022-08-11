import React, { useEffect, useState } from "react";
import "./App.css";
import { emojiData } from "./emoji";
import { TextField } from "@mui/material";
import { FoodItems } from "./FoodItems";
interface EmojiDataProp {
  title: string;
  symbol: string;
  keywords: string;
}
const foodItems = ["milk", "eggs", "cheese", "butter"];
function App() {
  const [title, setTitle] = useState<string>("");
  const [search, setSearch] = useState<any>();
  const [data, setData] = useState<EmojiDataProp[]>([]);

  useEffect(() => {
    const newData = emojiData.filter(emoji => emoji.title.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
    setData(newData)
  }, [search])
  const [check, setCheck] = useState<boolean>(false);

  const handleCheck = (value: string) => {
    setCheck(!check);
    if (check) {
      console.log(`${value} is check`);
    } else {
      console.log(`${value} is not check`);
    }
  };

  return (
    <div className="App">
      <div style={{marginTop: 30}}>
      <span >Hello: {title}</span><br/><br/>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      </div>
      <div style={{display:'inline-block',marginTop: 20}}>
        {foodItems.map((ele, i) => (
          <div key={'ele'+i} style={{textAlign:'left'}} >
          <FoodItems
            name={ele}
            handleCheck={handleCheck}
          />
           </div>
        ))}
      </div>

      <div className='App-header'>
        <label htmlFor="input">Emoji Search</label>
      </div>
      <div >
        <TextField type="text" value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
      </div>
      <div className='emaji-box'>
        {data.map(emoji => (
          <div className='emaji-display' onClick={() => { navigator.clipboard.writeText(emoji.symbol); alert("Emoji Copy") }} key={`emoji` + emoji.title}>
            <span>{emoji.symbol}</span> <span>{emoji.title}</span></div>
        ))}
      </div>
    </div>
  );
}

export default App;
