import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/authContext";

export const CreatePage = () => {
  const [link, setLink] = useState("");
  const { request } = useHttp();
  const auth = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const handlerKeyPress = async e => {
    try {
      if (e.key === "Enter") {
        console.log(auth.token);

        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          { Authorization: `Bearer ${auth.token}` }
        );
        history.push(`/detail/${data.link._id}`);
      }
    } catch (error) {}
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2">
        <div className="input-field">
          <input
            type="text"
            placeholder="Вставьте ссылку"
            value={link}
            onKeyPress={handlerKeyPress}
            onChange={e => setLink(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
