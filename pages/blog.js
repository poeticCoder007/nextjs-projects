import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

// Step 1: collect all files from blogdata directory
// Step 2: Iterate and Display them
const Blog = () => {
    return (
        <div className={styles.main}>
            <div className={styles.blogs}>
                <h2>Latest Blogs</h2>
                <div className="blog">
                    <Link href={'blogpost/learn-javascript'}>
                    <h3>How to learn JavaScript</h3></Link>
                    <p>A language to build logic for webpages</p>
                </div>
                <div className="blog">
                    <h3>How to learn JavaScript</h3>
                    <p>A language to build logic for webpages</p>
                </div>
                <div className="blog">
                    <h3>How to learn JavaScript</h3>
                    <p>A language to build logic for webpages</p>
                </div>
            </div>
        </div>
    )
}

export default Blog
