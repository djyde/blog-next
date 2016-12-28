import Layout from './Layout'
import PostFooter from './PostFooter'
export default ({ children }) => (
  <Layout>
    <div className='post-body'>
      {children}
    </div>
    <PostFooter />
  </Layout>
)