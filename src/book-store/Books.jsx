import Book from "./Book";
import "./books.css"

const firstObj = {
  bookImage: "https://m.media-amazon.com/images/I/81ehEnDuFmL._AC_UL320_.jpg",
  bookTitle: "Mr. Penumbra's 24-Hour Bookstore",
  price: "$15.99",
};
const secondObj = {
  bookImage: "https://m.media-amazon.com/images/I/61atT38nV1L._AC_UL320_.jpg",
  bookTitle: "150 Bookstores You Need to Visit Before you Die",
  price: "$20.99",
};
const thirdObj = {
  bookImage: "https://m.media-amazon.com/images/I/81MnLeJFP5L._AC_UL320_.jpg",
  bookTitle: "Bookshops & Bonedust",
  price: "$60.99",
};
const myBooks = [
    {
        bookImage: "https://m.media-amazon.com/images/I/81ehEnDuFmL._AC_UL320_.jpg",
        bookTitle: "Mr. Penumbra's 24-Hour Bookstore",
        price: "$15.99",
      },
      {
        bookImage: "https://m.media-amazon.com/images/I/61atT38nV1L._AC_UL320_.jpg",
        bookTitle: "150 Bookstores You Need to Visit Before you Die",
        price: "$20.99",
      },
      {
        bookImage: "https://m.media-amazon.com/images/I/81MnLeJFP5L._AC_UL320_.jpg",
        bookTitle: "Bookshops & Bonedust",
        price: "$60.99",
      },
    {
        bookImage: "https://m.media-amazon.com/images/I/81ehEnDuFmL._AC_UL320_.jpg",
        bookTitle: "Mr. Penumbra's 24-Hour Bookstore",
        price: "$15.99",
      },
      {
        bookImage: "https://m.media-amazon.com/images/I/61atT38nV1L._AC_UL320_.jpg",
        bookTitle: "150 Bookstores You Need to Visit Before you Die",
        price: "$20.99",
      },
      {
        bookImage: "https://m.media-amazon.com/images/I/81MnLeJFP5L._AC_UL320_.jpg",
        bookTitle: "Bookshops & Bonedust",
        price: "$60.99",
      },
]
function Books() {
  return (
    <>
      <h1>Books</h1>
      <div className="books">
        {/* <Book
          bookImage={firstObj.bookImage}
          bookTitle={firstObj.bookTitle}
          bookPrice={firstObj.price}
        />
        <Book
          bookImage={secondObj.bookImage}
          bookTitle={secondObj.bookTitle}
          bookPrice={secondObj.price}
        />
        <Book
          bookImage={thirdObj.bookImage}
          bookTitle={thirdObj.bookTitle}
          bookPrice={thirdObj.price}
        /> */}

        {
            myBooks.map(meriBooks=>{
                return <Book {...meriBooks} />
            })
        }
      </div>
    </>
  );
}

export default Books;
