import React, { useState } from 'react'

import data from './school'
import Link from './link'

const SchoolLinks = (props) => {
    const [links] = useState(data)

    return (
        <div className='links'>
        <h2>Important School Links</h2>
        <Link items={links} />
        </div>
    )
}

export default SchoolLinks