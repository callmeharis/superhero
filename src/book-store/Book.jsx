function Book({bookImage, bookTitle, price}) {
    return <div>
    <img src={bookImage} alt="book"/>
    <h4>{bookTitle}</h4>
    <h5>{price}</h5>
    </div>
}
export default Book