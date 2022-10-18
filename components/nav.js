import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div>
            <nav className= {styles.mainnav}>
                <ul>
                <Link href="/"><a><li>HOME</li></a></Link>
                <Link href="/about"><a><li>ABOUT</li></a></Link>
                <Link href="/blog"><a><li>BLOGS</li></a></Link>
                <Link href="/contact"><a><li>CONTACT</li></a></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
