import React from "react";
import { useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import { LinkCard } from "../components/LinkCard";

export const DetailPage = () => {
  const [link, setLink] = useState(null);
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
      const data = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`
      });
      setLink(data);
    } catch (error) {}
  }, [request, linkId, token]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return (<>
    {link && !loading && <LinkCard link={link}/>}
  </>);
};
