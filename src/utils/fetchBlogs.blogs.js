import db from "../config/firebase.config";

export const fetchBlogs = () => {
    let documents = db.collection('blogs')
                        .orderBy("chrono_order", "desc")
                        .get()
                        .then(querySnapshot => {
                            documents = querySnapshot.docs.map(doc => doc.data())
                            console.log(documents)
                        });
    return documents
}