import React from "react";
import { getRelativeTime } from "../util/date";

const VideoCard = ({ video }) => {
  const { channelTitle, title, thumbnails, publishedAt } = video.snippet;
  return (
    <li>
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{getRelativeTime(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
