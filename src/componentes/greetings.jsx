import "./greetings.css" 
function Greetings(params) {
    console.log(params)
    const greeting = {
        es:"Hola",
        fr:"Bonjour",
        de: "Hallo",
        en: "Hello",
    }
return <div className="Greetings">
{greeting[params.lang]} {params.children}
</div>;
}

export default Greetings;