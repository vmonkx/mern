import React from "react";

export const LinkCard = props => {
  const { link } = props;
  return (
    <>
      <h1>Сведения о ссылке</h1>
      <p>
        Ваша ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a>
      </p>
      <p>
        Откуда: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a>
      </p>
      <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
      <p>Ссылка создана: <strong>{new Date(link.date).toLocaleDateString()}</strong> </p>
    </>
  );
};
