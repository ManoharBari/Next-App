"use client";
import React from "react";

function page() {
  const handleclick = async () => {
    const data = { name: "john", age: 30 };

    let res = await fetch("http://localhost:3000/api/add", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let resData = await res.json();
    console.log(resData);
  };

  return (
    <>
      <div>API request</div>
      <button onClick={handleclick}>click me</button>
    </>
  );
}

export default page;
