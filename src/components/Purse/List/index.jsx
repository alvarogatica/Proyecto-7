import { useContext, useEffect } from "react";
import PurseContext from "../../../contexts/purse/PurseContext";

const PurseList = () => {
  const ctx = useContext(PurseContext);
  const { purses, getPurses } = ctx;

  useEffect(() => {
    getPurses();
  }, []);
  return (
    <div>
      PurseList
      {purses.map((purse) => (
        <div key={purse._id}>
          <h1>{purse.name}</h1>
          <p>{purse.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PurseList;
