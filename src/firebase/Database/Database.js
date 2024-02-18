import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, updateDoc, collection } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyDGUH6B5wgy6GwlX5MK_3dOjj4AFPzuEv0",
    authDomain: "oracle-mart.firebaseapp.com",
    projectId: "oracle-mart",
    storageBucket: "oracle-mart.appspot.com",
    messagingSenderId: "833874979001",
    appId: "1:833874979001:web:8f085e01c6b21936211368",
    measurementId: "G-FVYYWNTKYW"
};




class dataService {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        this.currentUser = null;
    }


    async addUserToDatabase(userData) {
        try {
            const userRef = collection(this.db, "users");
            await addDoc(userRef, userData);
            console.log("User added to database");
        } catch (error) {
            console.error("Error adding user to database: ", error);
        }
    }

    async updateUserInDatabase(userId, updatedUserData) {
        try {
            const userRef = collection(this.db, "users", userId);
            await updateDoc(userRef, updatedUserData);
            console.log("User updated in database");
        } catch (error) {
            console.error("Error updating user in database: ", error);
        }
    }
    // async addProduct(products) {
    //     if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
    //         return toast.error('Please fill all fields')
    //     }
    //     try {
    //         const productRef = collection(db, "products")
    //         await addDoc(productRef, products)
    //     } catch (error) {
    //         console.log(error)
    //         throw error;
    //     }
    // }
}


// Export the authentication service and database service
export const DataService = new dataService();
