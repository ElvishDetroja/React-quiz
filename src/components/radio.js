function Radio({ name, items, itemSelected, setItemSelected }) {
  //
  function handleChange(e) {
    if (e.target.checked) {
      setItemSelected((pre) => {
        return { ...pre, [e.target.name]: e.target.value };
      });
    }
  }

  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <div key={item}>
              <input
                type="radio"
                id={item}
                name={name}
                value={item}
                checked={itemSelected[name] == item}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label htmlFor={item}>{item}</label>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Radio;
