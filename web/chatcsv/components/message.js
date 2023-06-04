"use client";
import React, { useState } from "react";
export const Message = () => {

    // use state to store question
    const [question, setQuestion] = useState('');
    async function askQuestion(question) {
        console.log(question);
        // fetch response for question from http://192.168.1.44:5000/question=question
        console.log(`making call ${question}`);
        const response = await fetch(`http://192.168.1.44:5000/?question=${question}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
        console.log(`response: ${response}`);
    }
 
    return (
        <form>
            {/* store input in state on change */}
            <input type="text" className="left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit   lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" placeholder='Enter your question' onChange={(e) => setQuestion(e.target.value)} />
            <button type="submit" className="border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit   lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" onClick={() => askQuestion(question)}>Ask</button>
        </form>
    );
};