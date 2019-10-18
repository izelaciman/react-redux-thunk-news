import React from 'react'
import Channel from './channel'

const ChannelsField: React.FC = () => (
  <div className="row" >
    <Channel mode="sources" channelName="BBC" channelString="bbc-news" />
    <Channel mode="sources" channelName="CNN" channelString="cnn" />
    <Channel mode="sources" channelName="CNBC" channelString="cnbc" />    
    <Channel mode="sources" channelName="Business" channelString="business-insider-uk" /> 
    <Channel mode="sources" channelName="Telegraph" channelString="the-telegraph" />    
    <Channel mode="sources" channelName="JPost" channelString="the-jerusalem-post" />
    <Channel mode="country" channelName="Turkey" channelString="tr" />
    <Channel mode="country" channelName="Israel" channelString="il" />
    <Channel mode="country" channelName="UK" channelString="gb" />
    <Channel mode="country" channelName="USA" channelString="us" />
  </div>
);

export default ChannelsField;