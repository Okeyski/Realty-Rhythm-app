"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
      }

    const checkBookmarkStatus = async () => {
      try {
        const res = await fetch("/api/bookmarks/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            propertyId: property._id,
          }),
        });

        if (res.status === 200) {
          const data = await res.json();
          setIsBookmarked(data.isBookmarked);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    checkBookmarkStatus();
  }, [property._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to sign in to bookmark a property");
      return;
    }
    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId: property._id,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message);
        setIsBookmarked(data.isBookmarked);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  if (loading) return <p className="text-center">....</p>;
  return isBookmarked ? (
    <button
      onClick={handleClick}
      className="bg-[#f0e4d3] hover:bg-[#fbf3e8] text-[#243a6c] font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Remove Bookmark
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="bg-[#1c2f59] hover:bg-[#243a6c] text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
