"use client"
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Dashboard() {
    useLayoutEffect(()=>{
        // logic to check and validate if the user is authenticated to use this page
        redirect('/login')
    },[])
    return (
      <h1>Dashboard page</h1>
    );
  }
  