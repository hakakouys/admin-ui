import { useState } from 'react'

/* eslint-disable react/prop-types */
function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      type="button"
      className={`block w-full cursor-pointer rounded-lg p-4 text-left shadow-sm transition-colors hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        clicked ? 'bg-blue-100' : 'bg-white'
      }`}
      onClick={() => setClicked(true)}
    >
      <span className="mb-2 block text-lg font-semibold leading-snug text-gray-800">
        {title}
      </span>
      <span className="block text-sm leading-relaxed text-gray-600">{body}</span>
    </button>
  );
}

export default PostCard;
