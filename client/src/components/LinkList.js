import React from "react";
import { Link } from "react-router-dom";

export const LinkList = ({ links }) => {
    if (!links.length) {
        return <p className="center">У вас пока нет ссылок</p>
    }

  return (
    <table className="responsive-table striped">
      <thead>
        <tr>
          <th>№</th>
          <th>Сокращенная</th>
          <th>Оригинальная</th>
          <th>Дата создания</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.to}</td>
              <td>{link.from}</td>
              <td>{new Date(link.date).toLocaleDateString()}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Открыть</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
