import { useState} from "react";
import { AddClock } from "./AddClock";
import { ShowClocks } from "./ShowClocks";

export function ClockBlock() {
  const [clocksList, setList] = useState([]);
  const [clockData, setAddClock] = useState();
  const [idClock, setId] = useState(1);

  const handlerOnClick = (id) => {
    setList(clocksList.filter((clock) => clock.id !== id));
  }

  const handlerOfSubmit = (event) => {
    event.preventDefault();
    setList([...clocksList, {id: idClock, ...clockData}]);
    setId(idClock+1)
  }

  const handlerOnChange = ({target}) => {
    const {name, value} = target;
    if (value !== '') {
      setAddClock({...clockData, [name]: value})
    }
    if (name === 'timezone') {
      setAddClock({...clockData, [name]: value, tzms: Number(value)*3600000})
    }
  }

  return (
    <>
      < AddClock submitHandler={handlerOfSubmit} changeHandler={handlerOnChange}/>
      < ShowClocks clocksList={clocksList} onDeleted={handlerOnClick}/>
    </>
  )
}
