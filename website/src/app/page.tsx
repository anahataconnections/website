import { redirect } from "next/navigation";
import React from "react";

export const runtime = "edge";


export default function Home() {
 
     redirect("/Home");

}
