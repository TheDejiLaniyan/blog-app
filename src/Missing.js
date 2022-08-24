
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well, thats disappointing..</p>
      <p>
        <Link to='/'>Back to HomePage</Link>
      </p>
    </main>
  )
}

export default Missing