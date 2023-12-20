export default function checkLocalStorage() {
  window.localStorage.getItem("invoices") === null &&
    window.localStorage.setItem(
      "invoices",
      JSON.stringify([
        
          
      ])
    );
}
