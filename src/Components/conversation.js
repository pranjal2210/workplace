import React, { useEffect, useState } from 'react';
import { getData } from '../FetchNodeServices';

function Conversation(props) {

  const [usersData, setUsersData] = useState("");

  const userDataJson = JSON.parse(localStorage.getItem("userData"));
  const currentUserID = userDataJson._id;

  const getUserData = async () => {
    const otherUserID = props.chatData.members.find((id) => id !== currentUserID);
    const config = {
      headers: {
        Authorization: `Bearer ${userDataJson.token}`,
      },
    };

    try {
      const result = await getData(`channel/displayAUser/${otherUserID}`, config);
      // console.log("getUserData...", result.data.name);
      setUsersData(result.data);
    } catch (error) {
      console.log('error in getUserData', error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div key={props.chatData._id}>
      <h4>{usersData.name}</h4>
    </div>
  );
}

export default Conversation;