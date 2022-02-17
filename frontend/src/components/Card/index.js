import "./style.css";

const props = {
  title: String,
  date: String,
  tag: String,
};

const Card = ({ title, date, tag, id, callback } = props) => {
  const handleOnCheck = (id) => {
    callback(id);
  };

  return (
    <div className="card-container">
      <input
        type="checkbox"
        name="card-check"
        className="checkbox"
        onChange={() => {
          handleOnCheck(id);
        }}
      />
      <div className="card-description">
        <h2 className="card-title">{title}</h2>
        <p className="card-date">{date}</p>
      </div>
      <div className="card-tags-container">
        <h3 className="card-tags">{tag}</h3>
      </div>
    </div>
  );
};

export default Card;
