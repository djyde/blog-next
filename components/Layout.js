import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <title>Randy's Blog</title>
      <link href='/static/styles/index.css' rel='stylesheet' />
      <link href='//cdn.bootcss.com/highlight.js/9.9.0/styles/github-gist.min.css' rel='stylesheet' />
      <script src='//cdn.bootcss.com/highlight.js/9.9.0/highlight.min.js'></script>
      <script src='//cdn.bootcss.com/highlight.js/9.8.0/languages/javascript.min.js'></script>
      <script>hljs.initHighlightingOnLoad();</script>
    </Head>
    <Header />
    <div className='container'>
      {children}
    </div>
    <Footer />
  </div>
)