import "./BookInfoStyle.css";
const BookInfo = ({ details }) => {
  console.log(details);
  const { price, name } = details;
  return (
    <div className="book">
      <h4>name : {name}</h4>
      <p>price : {price}</p>
    </div>
  );
};

export default BookInfo;
