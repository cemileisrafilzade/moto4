import React from "react";

import "../../../sass/components/_comment.scss";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__title">Əlavə qeyd</div>
      <div className="comment__content">
        <textarea
          cols="60"
          rows="5"
          placeholder="Əlavə məlumatlarınızı qeyd edin."
          className="comment__content__area"
        ></textarea>
        <input
          type="text"
          placeholder="VİN/Ban kodu"
          className="comment__content__input"
        />
        <img
          src="/promotion/question.png"
          alt="question"
          className="comment__content__img"
        />
      </div>
      <div className="comment__restrict">
        <img
          src="/promotion/restrict.png"
          alt="restrict"
          className="comment__restrict__img"
        />
        <p className="comment__restrict__text">
          E-mail, telefon nömrəsi qeyd etmək qadağandır.
        </p>
      </div>
    </div>
  );
};

export default Comment;
