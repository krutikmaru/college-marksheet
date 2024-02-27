import React from 'react'
import { useUser } from '../../contexts/UserContext'
import Avatar from '../../Components/Account/Avatar';
import Details from '../../Components/Account/Details';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/firebase';

const Account = () => {
    const {user, setUser} = useUser()
    const logout = () => {
        try {
            const auth = getAuth(app);
            setUser(null);
        } catch (error) {
            console.log(e)
        }
    }
  return (
    <div className=" flex w-full min-h-screen flex-col  p-8">
    {/* Header */}
    <div>
      <h1 className="text-2xl">
        <span className="text-green-primary">{user.name}'s</span> Account
      </h1>
    </div>
    <div className="mt-10">
        <Avatar
          name={user.name}
        />
      </div>
      <div className="mt-10">
        <Details name={user.name} email={user.email} />
      </div>
      <div>

      <button onClick={logout} className='bg-red-600 py-2 mt-4 px-4 text-white rounded-md'>Logout</button>
      </div>

    </div>
  )
}

export default Account