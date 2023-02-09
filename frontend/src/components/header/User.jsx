import React, { useContext, useState } from "react"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"

export const User = () => {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }


  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXCbTJezqfSRFqZRuPeq3mdUI2y1U4yDG0w&usqp=CAU' alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to={"/account"}>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXCbTJezqfSRFqZRuPeq3mdUI2y1U4yDG0w&usqp=CAU' alt='' />
                    </div>
                    <div className='text'>
                      <h4>{user.username}</h4>
                      <label>Himachal, in</label>
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <button className='box' onClick={handleLogout}>
                  <BiLogOut className='icon' />
                  {user && <h4>Log Out</h4>}
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to='/login'>
            <button>My Account</button>
          </Link>
        )}
      </div>
    </>
  )
}
