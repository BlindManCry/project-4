import styled, { css } from "styled-components";

function UserNotification({ item, setNotifications, notifications }) {
  const {
    senderName,
    profilePic,
    action,
    post,
    time,
    isUnread,
    groupName,
    userPicture,
    text,
  } = item;

  function handleRead(id) {
    const readIndex = notifications.findIndex((item) => item.id === id);
    notifications[readIndex].isUnread = false;
    setNotifications([...notifications]);
  }

  return (
    <StyledUserNotification
      isunread={isUnread.toString()}
      onClick={() => handleRead(item.id)}
    >
      <MainContent>
        <img src={profilePic} alt="profile" />
        <Message>
          <div>
            <Name>{senderName} </Name>
            <Action>{action} </Action>
            {groupName && <GroupName>{groupName} </GroupName>}
            {post && <Post>{post} </Post>}
            {isUnread && <Unread> </Unread>}
          </div>
          <Time>{time}</Time>
          {text && (
            <Text>
              <p>{text}</p>
            </Text>
          )}
        </Message>
      </MainContent>

      {userPicture && <UserPicture src={userPicture} />}
    </StyledUserNotification>
  );
}

export default UserNotification;

const StyledUserNotification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${(props) =>
    css`
      ${props.isunread === "true" && "#F7FAFD"}
    `};

  @media screen and (max-width: 480px) {
    gap: 3rem;
  }
`;

const MainContent = styled.div`
  padding: 1.8rem 0rem 1.7rem 2rem;
  width: 100%;
  border-radius: 0.8rem;
  display: flex;
  gap: 1.9rem;

  & > img {
    width: 4.5rem;
    height: 4.5rem;
  }

  @media screen and (max-width: 480px) {
    gap: 1.3rem;
    padding: 1.6rem 2rem 1.6rem 1.6rem;

    & > img {
      width: 3.9rem;
      height: 3.9rem;
    }
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & > div {
    font-size: 1.6rem;
    line-height: 2.01rem;
  }

  @media screen and (max-width: 480px) {
    & > div {
      font-size: 1.4rem;
    }
  }
`;

const Name = styled.span`
  font-weight: 800;
  color: #1c202b;
  transition: all 0.3s;

  &:hover {
    color: #0a327b;
    cursor: pointer;
  }
`;

const Action = styled.span`
  font-weight: 500;
  color: #5e6778;
`;

const Post = styled.span`
  font-weight: 800;
  color: #5e6778;
  transition: all 0.3s;

  &:hover {
    color: #0a327b;
    cursor: pointer;
  }
`;

const Time = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.01rem;
  color: #939cad;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const GroupName = styled.span`
  font-weight: 800;
  color: #0a327b;

  &:hover {
    cursor: pointer;
  }
`;

const Unread = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #f65552;
  display: inline-block;
`;

const Text = styled.div`
  border-radius: 5px;
  border: 1px solid #dde7ee;
  margin-top: 1.3rem;
  margin-right: 2rem;
  transition: all 0.3s;

  & > p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.01rem;
    padding: 1.7rem 2rem 2rem 2rem;
    color: #5e6778;
  }

  &:hover {
    background: #e5effa;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const UserPicture = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 2rem;

  @media screen and (max-width: 480px) {
    width: 3.9rem;
    height: 3.9rem;
  }
`;
