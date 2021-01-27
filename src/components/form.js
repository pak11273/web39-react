import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Form = () => {

    const [user, setUser] = useState([])

    const newUserForm = {
        email: '',
        name: ''
    }

    const [oldUser, setOldUser] = useState([
        {
            name: 'Melissa',
            email: 'melissalongenberger24@gmail.com'
        }
    ])

    const [newUser, setNewUser] = useState(newUserForm)


    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users`)
            .then((res) => {
                setUser(res.data.data)
            })
            .catch((err) => {
                console.log('Error Getting users', err)
            })
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target
        setNewUser({...newUser, [name]: value})
    }

    const submit = (e) => {
        e.preventDefault()

        const trimNewUser = {
            name: newUser.name.trim(),
            email: newUser.email.trim(),
        }

        setOldUser([...oldUser, trimNewUser])
        setNewUser(newUserForm)
        console.log(newUser)

    }

// console.log(newUser)

    console.log('returned users', user)

    return (
        <div className='quotes'>
            <h3>ReqRes.in data</h3>
            {user.map(users => (
                <div>
                    <p>{users.email}</p>
                </div>
            ))}

            <form onSubmit={submit}>
                <label>Name</label>
                <input name='name' value={newUser.name} onChange={handleChange} id='name' type='text' /><br></br>
                <label>Email</label>
                <input name='email' value={newUser.email} onChange={handleChange} id='email' type='email' />
                <button type='submit'>Submit</button>
                {oldUser.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>Our friends list</h4>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

export default Form