import {useState} from 'react'

const Post = ({id, title, body, removePost}) => {
    const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-post'>
        <div className='post-info'>
            <h5>{title}</h5>
            <p>{readMore ? body : `${body.substring(0, 200)}...`}
            <button type='button' className='info-btn' onClick={() => setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
            </button>
            </p>
            <button type='button' className='btn btn-block delete-btn' onClick={() => removePost(id)}>Not Interested</button>

        </div>
    </article>
  )
}
export default Post