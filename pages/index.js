import Layout from '../components/Layout'
import Link from 'next/link'
import Hr from '../components/Hr'

const posts = [
  { title: '2016 年终总结', name: '2016-summary' },
  { title: '我看牙医的经历', name: 'dentist-experience' },
  { title: '你根本用不着退学', name: 'you-dont-need-to-drop-out' },
  { title: '静态类型在 JavaScript 中是一种负担吗？', name: 'is-static-type-in-javascript-a-burden', id: 13 },
  { title: '离开大学这一年', name: 'a-year-after-drop-out-of-school', id: 12 },
  { title: '换了新 Macbook 后我第一时间安装了这些工具', name: 'tools-of-my-macbook', id: 11 },
  { title: '中山纪念中学游记', name: '535-travel-middle-school', id: 10 },
  { title: '《烂泥》李峻一', name: 'lan-ni-li-jun-yi', id: 9 },
  { title: '从博客的搬迁到创造的乐趣', name: 'from-blog-migration-to-fun-of-creation', id: 8 },
  { title: '21 岁我想说的', name: 'say-in-21', id: 7 },
  { title: '我是如何监听 APP 价格变动的', name: 'how-do-i-detect-app-price', id: 6 },
  { title: 'Vue.js 和 Webpack', name: 'vue-and-webpack' },
  { title: '我学五笔的经历', name: 'my-wubi-exp', id: 5 },
  { title: '我的利器', name: 'my-liqi', id: 4 },
  { title: '写给即将学习编程的大学新生', name: 'note-to-new-programming-students', id: 3 },
  { title: '2014 年终总结', name: '2014-summary', id: 2 },
]

const talks = [
  { title: 'Vue and Native', at: '珠三角技术沙龙', date: 'May, 2016' },
  { title: 'TypeScript', at: 'Node 地下铁', slide: 'http://slides.com/randylu/deck-3/', date: 'Dec, 2016' }
]

const skills = [
  { title: 'Fundamental HTML/CSS/ECMAScript(5/6/7)' },
  { title: 'React', desc: '' },
  { title: 'Vue.js', desc: '' },
  { title: 'HTTP Protocol', desc: '' },
  { title: 'Git' }
]

const contacts = [
  { name: 'twitter', id: '@randyloop', link: 'https://twitter.com/randyloop' },
  { name: 'weibo', id: '@米斯特软的', link: 'http://weibo.com/djyde' },
  { name: 'zhihu', id: '卢涛南', link: 'https://www.zhihu.com/people/djyde' },
  { name: 'github', id: 'djyde', link: 'https://github.com/djyde' },
  { name: 'email', id: 'randypriv at gmail', link: 'mailto:randypriv@gmail.com' }
]

export default () => (
  <Layout>
    <Hr label='About Me' />
    <p>My name is Randy Lu (卢涛南). I was born in 1995 and I'd been coding since my 13. I wrote C, PHP, Python, JavaScript. But now I focus on JavaScript and currently work at <b>Alibaba Inc.</b></p>
    <Hr label='Posts' />
    <ul className='post-list non-style-list'>
      {posts.map((post, i) => (
        <li key={i} className='post-list-item'>
          <Link href={`/blog/${post.name}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <Hr label='Talks' />
    <ul className='talk-list non-style-list'>
      {talks.map((talk, i) => (
        <li key={i} className='talk-list-item'>
          <span className='title'>{talk.title}</span>
          <span className='at'> - {talk.at}</span>
          <span className='date'>{` (${talk.date})`}</span>
          { talk.slide && <span> - <a href={talk.slide}>Slide</a></span> }
        </li>
      ))}
    </ul>
    <Hr label='Skills' />
    <ul className='skill-list non-style-list'>
      {skills.map((skill, i) => (
        <li key={i} className='skill-list-item'>
          <span className='title'>{skill.title}</span>
        </li>
      ))}
    </ul>
    <Hr label='Contact' />
    <ul className='contact-list non-style-list'>
      {contacts.map(contact => (
        <li key={contact.id}>
          <b className={contact.name}>{contact.name.toUpperCase()}</b>: <a href={contact.link}>{contact.id}</a>
        </li>
      ))}
    </ul>
  </Layout>
)