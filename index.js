
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;


const data = [
        [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 }
        ],
        [
            { name: 'Bob', age: 40 }
        ]
    ];

const names = data.flat().map(item => item.name);
console.log(names);

  
