import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./Conversation";

const Conversations = () => {
  const {loading,conversations} = useGetConversation()
  console.log("conversations", conversations);
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx)=>(
        <Conversation 
        key={conversation._id}
        conversation={conversation}
        lastIdx ={idx === conversations.length - 1}/>
      ))}
      {loading ? (<span className="loading loading-dots loading-md"></span>) : null}
    </div>
  );
};

export default Conversations;
