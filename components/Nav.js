/**
 * 
 * menus: { title: string, url: string }
 * 
 */

import Link from 'next/link'

const menus = [
  { title: 'Blog', url: '/' },
  // { title: 'About', url: '/about' },
  { title: 'Timeline', url: '/timeline' },
  { title: 'Music', url: '/music' }
]

const Nav = () => {
  return (
    <nav>
      <ul className='nav'>
        {menus.map((menu, i) => (
          <li className='nav-item' key={i}>
            <Link href={menu.url}>
              <a>{menu.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav