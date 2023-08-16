import React, { useState } from "react";
import axios from "axios";

function Result({ title, description }) {
    return (
        <div className="bg-slate-100 w-56 rounded-xl p-2 border-b-2 border-black">
            <h1 className="font-semibold text-sm">{title}</h1>
            <p className="text-xs text-justify">{description}</p>
        </div>
    )
}

export default function Mobile() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([
        {
            title: "History",
            description: "History is the study of the past. Events occurring before the invention of writing systems are considered prehistory. \"History\" is an umbrella term that relates to past events as well as the memory, discovery, collection, organization, presentation, and interpretation of information about these events. Historians place the past in context using historical sources such as written documents, oral accounts, ecological markers, and material objects including art and artifacts."
        },
        {
            title: "History of the world",
            description: "The history of the world, in common parlance, is the history of humanity (or human history), as determined from archaeology, anthropology, genetics, linguistics, and other disciplines; and, for periods since the invention of writing, from recorded history and from secondary sources and studies."
        },
        {
            title: "History of the world",
            description: "The history of the world, in common parlance, is the history of humanity (or human history), as determined from archaeology, anthropology, genetics, linguistics, and other disciplines; and, for periods since the invention of writing, from recorded history and from secondary sources and studies."
        }
    ]);

    const fetchResult = async(key) => {
        const response = await axios.get(`https://127.0.0.1:5000/search/${key}`)
                                    .then(res => res.data)
                                    .catch(err => console.error(err));

        if(response) {
            setResult(response);
        }
    }

    function handleChange(event) {
        const key = event.target.value;

        setSearch(event.target.value);
        if(key.length > 0) {
            fetchResult(key);
        }
    }

    console.log(search);

    return (
        <div className="relative bg-white grid place-items-center overflow-hidden h-[35rem] w-72 rounded-3xl">
            <div className="absolute aspect-square h-4 bg-black top-2 -translate-x-4 rounded-full"></div>
            <div className="absolute aspect-square h-4 bg-black top-2 translate-x-4 rounded-full"></div>
            
            <div className="absolute h-5 w-1 rounded-l right-0 top-20 bg-black"></div>  
            <div className="absolute h-6 w-1 rounded-r left-0 top-16 bg-black"></div>
            <div className="absolute h-6 w-1 rounded-r left-0 top-24 bg-black"></div>

            <div className="relative bg-gray-600 flex justify-center h-[31rem] w-64 rounded-3xl overflow-hidden">
                <input type="text" value={search} placeholder="Search About History" onChange={handleChange} 
                className="font-semibold px-2 absolute w-5/6 h-10 bg-slate-300 top-4 rounded-3xl"/>

                <div className="flex flex-col items-center mt-16 overflow-auto">
                    {
                        result.map((item, index) => (
                            <Result key={index} title={item.title} description={item.description} />
                        ))
                    }
                </div>
            </div>

            <div className="absolute bottom-1 w-3/4 h-5 flex flex-row items-center justify-around">
                <div className="aspect-square h-5 border-2 border-black rounded-full"></div>
                <div className="aspect-square h-5 border-2 border-black rounded-full"></div>
                <div className="aspect-square h-5 border-2 border-black rounded-full"></div>
            </div>
        </div>
    )
}