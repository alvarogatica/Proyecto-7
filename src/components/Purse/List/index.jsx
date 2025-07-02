import { useContext } from "react"
import PurseContext from "../../../contexts/purse/PurseContext";


const PurseList = () => {
    const ctx = useContext(PurseContext);
    const { purses } = ctx;
  return (
    <div>
      PurseList
      {
        purses.map(purse => (
            <div key={purse.id}>
                <h1>{purse.name}</h1>
                <p>{purse.price}</p>
            </div>
        ))
      }
    </div>
  )
}

export default PurseList
