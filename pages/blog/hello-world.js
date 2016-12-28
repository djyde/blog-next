import Blog from '../../components/Blog'
import React from 'react'
import marked from 'marked'

export default class Post extends React.Component {
  render() {
    return (
      <Blog>
        <p>很早开始想做独立博客，但是由于繁忙的学业而断断续续，至今留下的只有几篇烂尾的文章。现在我已经完成了高中学业，正准备踏入大学生活。从今以后这里会是我正式的blog，我会在这里分享技术，分享生活。</p>
        <p>我爱这世界。</p>
      </Blog>
    )
  }
}