import "./style.css";

const props = {
  title: String,
  date: String,
  tag: String,
};

const Card = ({ title, date, tag } = props) => {
  return (
    <div className="card-container">
      <input type="checkbox" name="card-check" className="checkbox" />
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
