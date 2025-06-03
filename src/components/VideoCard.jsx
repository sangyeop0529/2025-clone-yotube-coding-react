import React from "react";
import { getRelativeTime } from "../util/date";

const VideoCard = ({ video }) => {
  const { channelTitle, title, thumbnails, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{getRelativeTime(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;
