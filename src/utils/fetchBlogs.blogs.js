export const fetchBlogs = async(db, lastSnapShot) => {
    const ref = db.collection('blogs').orderBy("chrono_order", "desc");
    let snapShot;
    if(lastSnapShot) {
        snapShot = await ref.startAfter(lastSnapShot).get();
    }
    else {
        snapShot = await ref.get();
    }

    const blogs = [];
    snapShot.forEach(blog => {
        blog.push(blog.data())
    });

    return {blogs, lastSnapShot: snapShot.docs[snapShot.docs.length - 1]};
}

/**
    let documents = db.collection('blogs')
                        .orderBy("chrono_order", "desc")
                        .get()
                        .then(querySnapshot => {
                            documents = querySnapshot.docs.map(doc => doc.data())
                            console.log(documents)
                        });
    return documents
 */