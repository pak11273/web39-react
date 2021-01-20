import React, { useState } from 'react'

import data from './school'
import Link from './link'

const SchoolLinks = (props) => {
    const [links] = useState(data)

    return (
        <>
        <h2>Important School Links</h2>
        <Link items={links} />
        </>
    )
}

export default SchoolLinks