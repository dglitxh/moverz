import React, { useState } from "react";
import { auth } from "@/lib/firebase";
export async function POST(req, res) {
  let data = await req.json();
  sendPasswordResetEmail(auth, data.email)
    .then(() => {
      // Password reset email sent!
      console.log({
        heading: "Success",
        text: "An email with the reset link has been sent to you. Check spam if you don't find mail",
      });
    })
    .catch((error) => {
      setLoading(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}
