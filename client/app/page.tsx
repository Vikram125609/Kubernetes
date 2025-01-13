"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [opeartion1, setOperation1] = useState("add");
  const [opeartion2, setOperation2] = useState("sum-till-n-for-loop");

  const calculate1 = async () => {
    try {
      const response = await fetch(`${process.env.HOST}/api/${opeartion1}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          x: 2,
          y: 3,
        }),
      });

      const data = await response.json();
      console.log(data);
      setResult1(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const calculate2 = async () => {
    try {
      const response = await fetch(`${process.env.HOST}/api/${opeartion2}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          x: 2,
        }),
      });

      const data = await response.json();
      console.log(data);
      setResult2(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center">
          <button onClick={calculate1} className="p-1 rounded bg-white text-black">Calculate</button>
          <select onChange={(e) => setOperation1(e.target.value)} value={opeartion1} className="p-1 rounded text-black outline-none" name="" id="">
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
            <option value="mul">Multiply</option>
            <option value="div">Divide</option>
          </select>
          <input className="p-1 rounded text-black outline-none" type="text" placeholder="Enter the value of x" />
          <input className="p-1 rounded text-black outline-none" type="text" placeholder="Enter the value of y" />
          <span>=</span>
          <div>{result1 ? result1 : "?"}</div>
        </div>

        <div className="flex gap-4 items-center">
          <button onClick={calculate2} className="p-1 rounded bg-white text-black">Calculate</button>
          <select onChange={(e) => setOperation2(e.target.value)} value={opeartion2} className="p-1 rounded text-black outline-none" name="" id="">
            <option value="sum-till-n-for-loop">Sum Till N</option>
            <option value="sum-till-n-square-for-loop">Sum Till N Squared</option>
          </select>
          <input className="p-1 rounded text-black outline-none" type="text" placeholder="Enter the value of x" />
          <span>=</span>
          <div>{result2 ? result2 : "?"}</div>
        </div>

      </main>
    </div>
  );
}
