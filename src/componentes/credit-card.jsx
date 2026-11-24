import "./credit-card.css"
import visalogo from"./assets/images/Visa.png"
import mastercardlogo from "./assets/images/master-card.svg"

function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) {
    console.log(props)
    const logo = type === "Visa" ? visalogo : mastercardlogo
    const last4= number.slice(-4)
    const Month = String(expirationMonth).padStart(2,"0")
    const Year = String(expirationYear).slice(-2)
    return <div className="CreditCard" style={{backgraundColor: bgColor, color:color}}>
        {}
    </div>
    
}

export default CreditCard