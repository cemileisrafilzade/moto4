import "../../../sass/components/_note.scss";

const Note = ({ product }) => {
  return (
    <div className="note">
      <div className="note__title">Əlavə qeydlər</div>
      <div className="note__content">{product.note.content}</div>
      <div className="note__extra">
        {!product.note.hasCrash && (
          <div className="note__extra__crash">
            <div className="note__extra__crash__value">Vuruğu yoxdur</div>
            <img src="/carDetail/has.png" alt="note" />
          </div>
        )}
        {!product.note.isPainted && (
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
