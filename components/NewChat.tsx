"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  id?: string;
};

function NewChat({ id }: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"), {
      userId: session?.user?.email!,
      messages: [],
      createdAt: serverTimestamp(),
    });

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="flex border border-gray-700 chatRow">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
