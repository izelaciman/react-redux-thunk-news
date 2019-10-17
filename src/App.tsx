import React from 'react';
import ChannelList from './components/channels/channel-list';
import NewsList from './components/news/news-list';


const App: React.FC = () => {
  return (
    <div className="App container">
      <ChannelList/>
      <NewsList />
    </div>
  );
}

export default App;
