import "./newsLetter.scss";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email!</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          name="email-id"
          id="email-id"
          placeholder="john@mail.com"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
