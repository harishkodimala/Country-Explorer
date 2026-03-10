import { useEffect, useRef } from "react";

function SearchBar({ setQuery }) {
const inputRef = useRef(null);

useEffect(() => {
inputRef.current.focus();
}, []);

const handleChange = (e) => {
setQuery(e.target.value);
};

return ( <div className="flex justify-center my-8"> <input
     ref={inputRef}
     type="text"
     placeholder="Search country..."
     onChange={handleChange}
     className="
       w-80
       px-5 py-3
       rounded-full
       border border-gray-300
       shadow-md
       focus:outline-none
       focus:ring-2
       focus:ring-blue-400
       focus:border-blue-400
       transition
       duration-300
       bg-white
       text-gray-700
       placeholder-gray-400
     "
   /> </div>
);
}

export default SearchBar;
