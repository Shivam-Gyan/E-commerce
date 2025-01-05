import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGUH6B5wgy6GwlX5MK_3dOjj4AFPzuEv0",
  authDomain: "oracle-mart.firebaseapp.com",
  projectId: "oracle-mart",
  storageBucket: "oracle-mart.appspot.com",
  messagingSenderId: "833874979001",
  appId: "1:833874979001:web:8f085e01c6b21936211368",
  measurementId: "G-FVYYWNTKYW"
};

class Authentication {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.auth = getAuth(this.app);
        this.currentUser = null;
    }

    async signup({name,email, password}) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
           await updateProfile(userCredential.user,{
                displayName:name
            })
            this.currentUser = userCredential
            console.log('Signup successful');
            return this.currentUser;
        } catch (error) {
            console.log('Error occured at :: Singup :: functionality ', error.message);
            return error;
        }
    }
    

    async login({email, password}) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            this.currentUser = userCredential.user;
            console.log('Login successful');
            return this.currentUser;
        } catch (error) {
            console.log('Error occured at :: Login :: functionality ', error.message);
            throw error;
        }
    }

    async logout() {
        try {
            await signOut(this.auth);
            this.currentUser = null;
            console.log('Logged out');
        } catch (error) {
            console.log('Error occured at :: Logout :: functionality ', error.message);
            throw error;
        }
    }

}

// Example usage:
export  const authServices = new Authentication();


