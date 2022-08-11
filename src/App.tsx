import React, { useEffect, useState } from 'react';
import './App.css';
import { emojiData } from './emoji';
import { TextField } from '@mui/material';
interface EmojiDataProp {
  title: string;
  symbol: string;
  keywords: string;
}
function App() {
  const [search, setSearch] = useState<any>();
  const [data, setData] = useState<EmojiDataProp[]>([]);

  useEffect(() => {
    const newData = emojiData.filter(emoji => emoji.title.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
    setData(newData)
  }, [search])

  return (
    <div className='App'>
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
