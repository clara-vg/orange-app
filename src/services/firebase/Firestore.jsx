import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "."

export const getProducts = (categoryId) => {
 const collectionRef = !categoryId ? collection(db, 'products') : query(collection(db, 'products'), where('category', '==', categoryId))

   return getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
        const values = doc.data()
        return { id: doc.id, ...values}
      })
      return products
    }).catch(error => {
      return(error)
    })
}
