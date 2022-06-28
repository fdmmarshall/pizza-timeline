import pizzaTitle from "../the_pizza_title.png";

export default function Title() {
  return (
    <div>
      <span className="Text-wrapper">
        <p className="Title-text">The History of</p>
      </span>

      <img src={pizzaTitle} alt="The Pizza" />
    </div>
  );
}
