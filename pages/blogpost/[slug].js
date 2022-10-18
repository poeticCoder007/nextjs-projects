import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Blogpost.module.css'

 // Step 1: Find the file corresponding to the  slug
 // Step 2: Populate blog.
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <div className={styles.main}>
            <h1>
                Title of the Page {slug} 
            </h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores minima, libero eveniet labore nesciunt dicta pariatur dolor dolore optio perspiciatis praesentium ipsa tempore ipsam ipsum quisquam cupiditate repudiandae sapiente. Corporis ipsa repudiandae officia quis excepturi, repellat iste enim, voluptate nemo assumenda quasi distinctio delectus explicabo culpa officiis veniam nesciunt?</p>
        </div>
    )
}

export default slug