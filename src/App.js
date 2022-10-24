import { useState } from "react"

import "./App.scss"

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      author: {
        name: "Mark Webber",
        avatar: "/images/avatar-mark-webber.webp",
        href: "#",
      },
      text: "reacted to your recent post",
      link: {
        text: "My first tournament today!",
        href: "#",
      },
      time: "1m ago",
      read: false,
    },
    {
      id: "2",
      author: {
        name: "Angela Gray",
        avatar: "/images/avatar-angela-gray.webp",
        href: "#",
      },
      text: "followed you",
      time: "5m ago",
      read: false,
    },
    {
      id: "3",
      author: {
        name: "Jacob Thompson",
        avatar: "/images/avatar-jacob-thompson.webp",
        href: "#",
      },
      text: "has joined your group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "1 day ago",
      read: false,
    },
    {
      id: "4",
      author: {
        name: "Rizky Hasanuddin",
        avatar: "/images/avatar-rizky-hasanuddin.webp",
        href: "#",
      },
      text: "sent you a private message",
      time: "5 day ago",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      read: true,
    },
    {
      id: "5",
      author: {
        name: "Kimberly Smith",
        avatar: "/images/avatar-kimberly-smith.webp",
        href: "#",
      },
      text: "commented on your picture",
      image: {
        src: "/images/image-chess.webp",
        alt: "Chess",
        href: "#",
      },
      time: "1 week ago",
      read: true,
    },
    {
      id: "6",
      author: {
        name: "Nathan Peterson",
        avatar: "/images/avatar-nathan-peterson.webp",
        href: "#",
      },
      text: "reacted to your post",
      link: {
        text: "5 end-game strategies to increase your win rate",
        href: "#",
      },
      time: "2 weeks ago",
      read: true,
    },
    {
      id: "7",
      author: {
        name: "Anna Kim",
        avatar: "/images/avatar-anna-kim.webp",
        href: "#",
      },
      text: "left the group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "2 weeks ago",
      read: true,
    },
  ])

  function handleMarkAsRead(id) {
    setNotifications(
      notifications.map((notification) => {
        if (notification.id === id) {
          return {
            ...notification,
            read: true,
          }
        }

        return notification
      })
    )
  }

  function handleMarkAllAsRead() {
    setNotifications(
      notifications.map((notification) => {
        return {
          ...notification,
          read: true,
        }
      })
    )
  }
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="title">
            <h1>Notifications</h1>
            <span className="badge">
              {notifications.filter((n) => !n.read).length}
            </span>
          </div>
          <button className="mark" onClick={handleMarkAllAsRead}>
            Mark all as read
          </button>
        </header>
        <div className="posts">
          {notifications &&
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={!notification.read ? "post isUnread" : "post"}
                onClick={() => handleMarkAsRead(notification.id)}
              >
                <img
                  className="post__avatar"
                  src={notification.author.avatar}
                  alt={notification.author.name}
                />
                <div className="post__content">
                  <div className="post__text">
                    <a className="post__name" href={notification.author.href}>
                      {notification.author.name}
                    </a>
                    <span>{notification.text}</span>
                    {notification.link && (
                      <a className="post__about" href={notification.link.href}>
                        {notification.link.text}
                      </a>
                    )}
                    {!notification.read && (
                      <span className="post__notify"></span>
                    )}
                  </div>
                  <p className="post__time">{notification.time}</p>
                  {notification.privateMessage && (
                    <p className="post__private">
                      {notification.privateMessage}
                    </p>
                  )}
                </div>
                {notification.image && (
                  <a href={notification.image.href}>
                    <img
                      className="post__image"
                      src={notification.image.src}
                      alt={notification.image.alt}
                    />
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
