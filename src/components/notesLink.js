import React, { useState } from 'react'

import data from './notes'
import Link from './link'

const NoteLinks = (props) => {
    const [links] = useState(data)

    return (
        <>
        <h2>Notes Links</h2>
        <Link items={links} />
        </>
    )
}

export default NoteLinks