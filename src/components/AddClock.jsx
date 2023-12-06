export function AddClock({submitHandler, changeHandler}) {
  return (
    <form className='form-clock' onSubmit={submitHandler}>
      <div className="form-city">
        <label htmlFor="city">Название</label>
        <input type="text" name="city" id="city" onChange={changeHandler}/>
      </div>
      <div className="form-timezone">
        <label htmlFor="timezone">Временная зона</label>
        <input type='number' name="timezone" id="timezone" onChange={changeHandler}/>
      </div>
      <button type="submit">Добавить</button>
    </form>
  )
}
