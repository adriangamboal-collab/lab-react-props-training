import IdCard from "./componentes/id-card";
import Greetings from "./componentes/greetings"
import Random from "./componentes/random"
import Boxcolor from "./componentes/Box-Color"
function App() {
  return (
    <div>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        nationality= 'USA'
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        nationality='JAPAN'
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      /><div>
    <Greetings
     lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      </div>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
       <div>
        <div>
         <Boxcolor r={250} g={0} b={0} />
          <Boxcolor r={128} g={255} b={0} />
        </div>

       </div>
      
      </div>
  );
 
}

export default App;
