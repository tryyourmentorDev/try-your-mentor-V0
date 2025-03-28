
'use client';
import React from 'react';

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (<><h1>homw</h1>
  <p>tect</p>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>console.log("dd")}>Button</button>
  <h1 className="text-3xl font-bold text-base">Hello, Next.js with Tailwind CSS!</h1></>);
}
