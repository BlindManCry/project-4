import styled from "styled-components";
import UserNotification from "./UserNotification";
import data from "../../data.json";
import { useEffect, useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState(data.notifications);
  const [notificationCount, setNotificationCount] = useState();

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i].isUnread === true) {
        count++;
      }
    }
    setNotificationCount(count);
  }, [notifications]);

  function handleMarkNotifications() {
    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i].isUnread === true) {
        notifications[i].isUnread = false;
      }
    }
    setNotifications([...notifications]);
  }

  return (
    <StyledNotifications>
      <Header>
        <div>
          <h1>Notifications</h1>
          <p>{notificationCount}</p>
        </div>
        <p onClick={handleMarkNotifications}>Mark all as read</p>
      </Header>

      <UserNotificationsContainer>
        {notifications.map((item) => {
          return (
            <UserNotification
              key={item.id}
              item={item}
              setNotifications={setNotifications}
              notifications={notifications}
            />
          );
        })}
      </UserNotificationsContainer>
    </StyledNotifications>
  );
}

export default Notifications;

const StyledNotifications = styled.div`
  width: 73rem;
  padding: 3.3rem 3rem 0px 3rem;
  background: #ffffff;
  border-radius: 1.5rem;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 2.4rem 1.6rem 2.9rem 1.6rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 1.1rem;

    & > h1 {
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 3.02rem;
      color: #1c202b;
      box-shadow: 0 2rem 6rem 0 rgba(73, 97, 168, 0.05);
    }

    & > p {
      font-size: 1.6rem;
      font-weight: 800;
      line-height: 2.016rem;
      color: #ffffff;
      border-radius: 0.6rem;
      background: #0a327b;
      width: 3.2rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
    }

    @media screen and (max-width: 480px) {
      & > div {
        gap: 2rem;
        & > p {
          font-size: 1.6rem;
        }
      }

      h1 {
        font-size: 2rem;
      }

      & > p {
        font-size: 1.4rem;
      }
    }
  }

  & > p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.01rem;
    color: #5e6778;
  }

  & > p:hover {
    color: #0a327b;
    cursor: pointer;
  }
`;

const UserNotificationsContainer = styled.div`
  margin-top: 3.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
