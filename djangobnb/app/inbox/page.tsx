import { getUserId } from "../lib/actions";
import apiService from "../services/apiService";
import React, { useState, useEffect } from 'react';
import Conversation from "../components/inbox/Conversation";

export type UserType={
    id:string;
    name:string;
    avatar_url:string;
}

export type ConversationType={
    id:string;
    users:UserType[];
}

const InboxPage=async ()=>{
    const userId=await getUserId();
    
    if(!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>Necesitas estar autenticado para visualizar esta página.</p>
            </main>
        )
    }

    const conversations=await apiService.get('/api/chat/');
    console.log(conversations);

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">
                Mensajes
            </h1>
            {conversations.map((conversation: ConversationType) => {
                return (
                    <Conversation
                    key={conversation.id}
                    userId={userId}
                    conversation={conversation}
                    />
                )
            })}
        </main>
    )
}

export default InboxPage;