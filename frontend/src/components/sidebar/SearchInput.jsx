import { useState } from "react";
import {FaSearch} from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
 const {setSelectedConversation} = useConversation()
 const { conversations} = useGetConversation()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if(search.length < 3){
      return toast.error("Please enter at least 3 characters")
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    } else {
      toast.error(`Chat with ${search.toLowerCase()} not found`)
      setSearch("")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch className="h-4 w-4 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
