import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import InvoiceStyles from "../Styles/InvoiceStyles";

export default function Invoice(props) {
  const classes = InvoiceStyles();

  const invAn = useRef();


  useEffect(() => {
    gsap.from(invAn.current, {
      duration: 0.5,
      y: "-100%",
    });
  }, []);

  return (
    <div className={classes.Invoice} ref={invAn}>
      <div className="details">
        <div className="Invoice-id">
          <span>#</span>
          {props.id}
        </div>
        <div className="Invoice-date">{props.date}</div>
        <div className="Invoice-name">{props.name}</div>
      </div>
      <div className="price-status">
        <div className="Invoice-price">Rs{props.price}</div>
        <div className={`Invoice-status ${props.status}`}>
          <span className="status"></span>
          <div>{props.status}</div>
        </div>
        <div className="Invoice-arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
