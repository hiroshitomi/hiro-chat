import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import SkeletonMessage from "../skeletons/SkeletonMessage";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages])

  return (
    <div className="flex-1 px-4 overflow-auto">
      {loading ?? [...Array(3)].map((_, idx) => <SkeletonMessage key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {!loading && messages.length > 0 && messages.map((message) => 
      (<div key={message._id} ref={lastMessageRef}>
        <Message message={message} />
      </div>
      ))}
    </div>
  );
};

export default Messages;
