"use client";

import { useEffect, useState } from "react";
import Tiptap from "../components/Tiptap";

async function callFunc() {
  const response = await fetch("http://127.0.0.1:8000/");
  console.log("responseresponseresponseresponse", response);
  return response;
}

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await callFunc();
        setData(result);
      } catch (error) {
        // Handle the error appropriately
        console.log("errorerrorerror", error);

        setData("Failed to fetch data");
      }
    }

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <h1>Hi</h1>
      <Tiptap />
      <h1>{data}</h1>
    </div>
  );
}
