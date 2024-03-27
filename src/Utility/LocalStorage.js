const getStoredBooks = (booksKey)=>{
    const storedBooks = localStorage.getItem(booksKey);

    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}


const saveBooks = (id, booksKey)=>{
    const storedBooks = getStoredBooks(booksKey);

    if (!storedBooks.includes(id)) {
        storedBooks.push(id); 
        localStorage.setItem(booksKey, JSON.stringify(storedBooks));
    }
}


export{getStoredBooks, saveBooks};

