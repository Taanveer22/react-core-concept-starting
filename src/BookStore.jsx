import BookInfo from "./BookInfo";

const BookStore = ({ list }) => {
  console.log(list);
  return (
    <div>
      <h3>total books : {list.length}</h3>
      {list.map((element) => (
        <BookInfo details={element}></BookInfo>
      ))}
    </div>
  );
};

export default BookStore;
