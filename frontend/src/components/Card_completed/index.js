import "./style.css";

const props = {
  title: String,
  date: String,
  tag: String,
};

const CardCompleted = ({ title, date, tag } = props) => {
  return (
    <div className="card-completed-container">
      <input type="checkbox" name="card-check" className="checkbox" />
      <div className="card-completed-description">
        <h2 className="card-completed-title">{title}</h2>
        <p className="card-completed-date">{date}</p>
      </div>
      <div className="card-completed-tags-container">
        <h3 className="card-completed-tags">{tag}</h3>
      </div>
    </div>
  );
};

export default CardCompleted;
