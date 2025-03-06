import React from 'react';
import ChartContainer from './containers/ChartContainer';

function App() {
  const genres = [
    {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
    {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
    {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
    {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"},
    {name: "Metal", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=1153/json"},
    {name: "Pop", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=14/json"}
  ]
  
  return (
    <ChartContainer genres={genres} />
  );
}

export default App;
