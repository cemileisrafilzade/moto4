import "../../../sass/components/_note.scss";

import { useParams } from "react-router-dom";
import { products } from "../../../mockData/products";

const Note = () => {
  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );
  return (
    <div className="note">
      <div className="note__title">Əlavə qeydlər</div>
      <div className="note__content">{product[0].note.content}</div>
      <div className="note__extra">
        {!product[0].note.hasCrash && (
          <div className="note__extra__crash">
            <div className="note__extra__crash__value">Vuruğu yoxdur</div>
            <img src="/carDetail/has.png" alt="note" />
          </div>
        )}
        {!product[0].note.isPainted && (
          <div className="note__extra__painted">
            <div className="note__extra__painted__value">Rənglənməyib</div>
            <img src="/carDetail/has.png" alt="note" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Note;
