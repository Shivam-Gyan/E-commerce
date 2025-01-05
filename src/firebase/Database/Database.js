import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, onSnapshot, updateDoc,doc,deleteDoc, query, collection, orderBy, getDocs } from "firebase/firestore";
// import { addToCart } from "../../redux/CartSlice";
export const firebaseConfig = {
    apiKey:import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROOJECTID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
  };


class dataService {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        this.currentUser = null;
    }

// USER DATA 
    async addUserToDatabase(userData) {
        try {
            const userRef = collection(this.db, "users");
            await addDoc(userRef, userData);
            console.log("User added to database");
        } catch (error) {
            console.error("Error adding user to database: ", error);
            throw error
        }
    }

    async updateUserInDatabase(userId, updatedUserData) {
        try {
            const userRef = collection(this.db, "users", userId);
            await updateDoc(userRef, updatedUserData);
            console.log("User updated in database");
        } catch (error) {
            console.error("Error updating user in database: ", error);
            throw error
        }
    }


    // admin add product here manages
    async addProduct(products) {
        try {
            const productRef = collection(this.db, "products")
            await addDoc(productRef, products)
            console.log("add product here")
        } catch (error) {
            console.log("Error while adding product in database :: addProduct :: ", error)
            throw error;
        }
    }

    async getProductFromDatabase(setProduct) {
        try {
            const q = query(
                collection(this.db, "products"),
                orderBy("category"),
            );
            onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });
                localStorage.setItem('products',JSON.stringify(productsArray))
            });
        } catch (error) {
            console.log("Error while fetching product from database :: getProductFromDatabase :: ", error)
            throw error
        }
        
    }



    // cart management here

    async AddToCartDatabase(userId,item) {
        try {
            const cartRef = collection(this.db, 'carts', userId, 'items')
            const data=await addDoc(cartRef, item)
            const dataId=data.id
            return {dataId,...item};
        } catch (error) {
            console.log("Error while adding cart in database :: AddToCartDatabase :: ", error)
            throw error;
        }
    }

    async getFromCartDatabase(userId) {
        try {
            const cartRef = collection(this.db, 'carts', userId,'items')
            const querySnapshot = await getDocs(query(cartRef, orderBy("date")));
            const data = querySnapshot.docs.map(doc => ({
                dataId: doc.id,
                ...doc.data()
            }));
            return data;
        } catch (error) {
            console.error("Error fetching data from database :: getFromCartDatabase ::", error);
        }
    }

    async updateCartItem(userId,dataId,newItem) {
        try {
            const itemRef = doc(this.db, 'carts', userId, 'items', dataId);
            await updateDoc(itemRef, newItem);
            return newItem;
        } catch (error) {
            console.error("Error updating cartData to database :: updateCartItem :: ", error);
            throw error;
        }
    }

    async deleteCartItem(userId,itemId) {
        try {
            const itemRef = doc(this.db, 'carts', userId, 'items', itemId);
            await deleteDoc(itemRef);
            return itemId;
        } catch (error) {
            console.error("Error deleting cartItem from database :: deleteCartItem :: ", error);
            throw error;
        }
    }

    // order 

    async order(orderInfo){
        try {
            await addDoc(collection(this.db, "orders"), orderInfo)
        } catch (error) {
            throw error
        }
    }
   
}


// Export the authentication service and database service
export const DataService = new dataService();
