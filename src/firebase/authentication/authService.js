import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROOJECTID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
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


