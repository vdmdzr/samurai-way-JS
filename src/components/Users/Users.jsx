import React from "react";
import './users.css'

export const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://avatars.mds.yandex.net/i?id=2a00000179fec733273e76907b06b21df92a-5132286-images-thumbs&n=13&exp=1',
                followed: false,
                fullName: 'Vadim',
                status: 'Hi there!',
                location: {city: 'Gomel', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
                followed: false,
                fullName: 'Vasya',
                status: 'Good bye!',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoURL: 'https://avatars.mds.yandex.net/i?id=e57b1daf86a74bb34443c824e884f634-5488376-images-thumbs&n=13&exp=1',
                followed: true,
                fullName: 'Valerchik',
                status: 'im fine bro',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])
    }

    return (
      <div>
          {props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                      <img className={'photoUser'} src={u.photoURL}/>
                  </div>
                  <div>
                      {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
                  </div>
              </span>
              <span>
                  <span>
                      <div>{u.fullName}</div>
                      <div>{u.status}</div>
                  </span>
                  <span>
                      <div>{u.location.country}</div>
                      <div>{u.location.city}</div>
                  </span>
              </span>
          </div>)}
      </div>
    )
}







