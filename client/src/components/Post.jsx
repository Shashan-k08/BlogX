import React from 'react'
import {format} from "date-fns";
 const post = ({title,summary,cover,content,createdAt}) => {
  return (
    <div>
      <div className="post">
        <div className="image">{/* eslint-disable-next-line */}
          <img src="https://techcrunch.com/wp-content/uploads/2022/07/this-week-in-apps-splash-2022.webp?w=730&crop=1" />
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a href className="author"> Shashank Tiwari</a>
            <time>{ format(new Date(createdAt),'MMM d,yyyy HH:mm')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </div>
  )
}
export default post
