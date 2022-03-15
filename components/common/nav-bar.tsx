import React from 'react'
import Image from 'next/image'

import { Button } from '@chakra-ui/react'

const NAV_LINKS = [
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Invest',
    href: '#',
  },
  {
    name: 'Read',
    href: '#',
  },
  {
    name: 'Work With Us',
    href: '#',
    children: [
      {
        name: 'Work 1',
        href: '#',
      },
      {
        name: 'Work 2',
        href: '#',
      },
    ],
  },
]

class NavBar extends React.Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='nav-contents'>
          <div className='nav-links'>
            {NAV_LINKS.map((_navLink, idx) => {
              const hasChildren =
                _navLink.children && _navLink.children.length > 0

              return (
                <div key={`link-${idx}`}>
                  <span>
                    {hasChildren ? _navLink.name : <a href={_navLink.href}>{_navLink.name}</a>}
                    {hasChildren && (
                      <span className='nav-icon'>
                        <Image
                          src='/icons/vector.png'
                          alt='down-caret'
                          width={15}
                          height={10}
                        />
                      </span>
                    )}
                  </span>
                </div>
              )
            })}
          </div>

          <Button>Connect Wallet</Button>
        </div>
      </div>
    )
  }
}

export default NavBar
