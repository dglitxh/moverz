import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  let err;
  const data = await req.json();
  try {
    if (data.password !== data.password2) {
      console.log("passwords do not match");
      return NextResponse.json(
        { message: "Error: passwords do not match" },
        { status: 400 }
      );
    }
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("auth success")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, "hmmmmm");
        err = true;
        return NextResponse.json(
          { message: "could not auth" },
          { status: 400 }
        );
      });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateProfile(auth.currentUser, {
          displayName: `${data.name}`,
        })
          .then(() => {
            // Profile updated!
            // create server session
          })
          .catch((error) => {
            // An error occurred
            console.log(error);
            err = true;
            return NextResponse.json(
              { message: "could not auth" },
              { status: 400 }
            );
          });
      } else {
        // User is signed out
      }
    });
    return err
      ? NextResponse.json(
          { message: "authentication failure" },
          { status: 400 }
        )
      : NextResponse.json(
          { message: "authenticated succesfully" },
          { status: 200 }
        );
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 400 });
  }
}
