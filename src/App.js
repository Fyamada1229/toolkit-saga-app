import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import "./App.css";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);

  return (
    <>
      <div className="App">
        <h1>CATS</h1>
        <p>Cat Pictures</p>
        <hr />
        <div className="Gallery">
          {cats.map((cat) => (
            <div key={cat.id} className="row">
              <div className="column column-right">
                <img
                  alt="cat.name"
                  src={cat.image.url}
                  width="200"
                  height="200"
                />
              </div>
              <div className="column column-left">
                <h2>{cat.name}</h2>
                <h5>Temperament: {cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button>VIEW MORE CATS</button>
      </div>
    </>
  );
}

export default App;
