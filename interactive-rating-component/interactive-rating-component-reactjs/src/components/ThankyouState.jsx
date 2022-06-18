import ThankYou from "../../images/illustration-thank-you.svg";

export default function ThankyouState(props) {
  return (
    <div className="thankyou-state">
      <img className="thankyou-img" src={ThankYou} alt="thank-you" />
      <p className="final-rating">You selected {props.state.rating} out of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
