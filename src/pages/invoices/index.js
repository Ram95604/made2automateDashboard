import {
  useState,
  useEffect,
  useRef,
  useContext,
  useLayoutEffect,
} from "react";
import Filter from "../../Components/Filter";
import NewInvoice from "../../Components/NewInvoice";
import Invoice from "../../Components/Invoice";
import { Link } from "react-router-dom";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { gsap } from "gsap";
import checkLocalStorage from "../../Hooks/checkLocalStorage";
import InvoicesStyle from "../../Styles/InvoicesStyles";
import { FormContext } from "../../Context/showForm";

export default function Invoices(props) {
  checkLocalStorage();
  const { changeState } = useContext(FormContext);

  const [permanent, setPermanent] = useLocalStorage("invoices", []);
  const [data] = useLocalStorage("invoices");
  const [invoices, setInvoices] = useState(data);

  const filterHandler = (value) => {
    value !== "All"
      ? setInvoices([...data.filter((d) => d.status === value)])
      : setInvoices([...data]);
  };

  useEffect(() => {
    if (props.fetch) setPermanent([props.fetch, ...permanent]);
    setInvoices(data);
  }, [props.fetch]);

  useLayoutEffect(() => {
    gsap.from(an.current, {
      duration: 1.5,
      x: "-100%",
    });
  }, []);

  const an = useRef();

  const classes = InvoicesStyle();
  document.title = `(${invoices.length}) Invoices - Invoice App`;
  return (
    <div className={classes.InvoiceDetails} ref={an}>
      <div className="flexbox">
        <div className="zero-column">
          <h1>Total Income</h1>
          <div className="Counter">
           Money Generated is Rs.{" "}
            {(() => {
              let sum = 0;
              for (let index = 0; index < invoices.length; index++) {
                sum += invoices[index].granTotal;
              }
              return sum.toLocaleString(); 
            })()}
           
          </div>
        </div>
        <div className="first-columm">
          <h1>Orders</h1>
          <div className="Counter">
            There are {invoices.length} total Orders
          </div>
        </div>
        <div className="second-columm">
          <Filter change={filterHandler} />
          <NewInvoice showForm={changeState} />
        </div>
      </div>
      {invoices.map((d) => (
        <Link
          to={`/id/${d.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
          key={d.id}
        >
          <Invoice
            id={d.id.slice(0, 5).toUpperCase()}
            date={d.date}
            name={d.clientName}
            price={d.granTotal.toLocaleString()}
            status={d.status}
          />
        </Link>
      ))}
    </div>
  );
}
