import React from 'react'

 const post = () => {
  return (
    <div>
      <div className="post">
        <div className="image">{/* eslint-disable-next-line */}
          <img src="https://techcrunch.com/wp-content/uploads/2022/07/this-week-in-apps-splash-2022.webp?w=730&crop=1" />
        </div>
        <div className="texts">
          <h2>Full-house backup coming later this year</h2>
          <p className="info">
            <a href className="author"> Shashank Tiwari</a>
            <time>2023-03-08</time>
          </p>
          <p className="summary">Today at its special laubch event home backup power . shashank is a good boy.Hello there what gong on</p>
        </div>
      </div>
    </div>
  )
}
export default post
