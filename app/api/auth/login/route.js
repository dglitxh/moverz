import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { postReq } from "../components/utils/httpReqs";
import { useRouter } from "next/router";

export async function POST(req, res) {
  let err;
  let data = await req.json();
  await signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("loggedIn", user.uid);
      // ...
    })
    .catch((error) => {
      err = true
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`);
      if (
        errorCode === "auth/wrong-password" ||
        errorCode === "auth/user-not-found"
      ) {
        console.log("Invalid user name or password");
      }
    });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // create server session
      // ...
    } else {
      // User is signed out
      // ...
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
}
