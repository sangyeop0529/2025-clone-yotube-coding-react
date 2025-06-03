import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

const ChannelPlaylist = ({ channelId }) => {
  const { youtube } = useYoutubeApi();
  const { data: videos } = useQuery({
    queryKey: ["playlist", channelId],
    queryFn: () => youtube.searchByChannelId(channelId),
  });
  return (
    <>
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ChannelPlaylist;
