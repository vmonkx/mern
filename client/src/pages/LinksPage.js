import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useHttp } from "../hooks/http.hook";
import { useCallback } from "react";
import { Loader } from "../components/Loader";
import { LinkList } from "../components/LinkList";

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);

  const getLinks = useCallback(async () => {
      try {
        const data = await request("/api/link", "GET", null, {
            Authorization: `Bearer ${token}`
          });
          setLinks(data);
      } catch (error) {
          
      }
  }, [request, token]);

  useEffect(() => {
      getLinks()
      
  }, [getLinks])

  if (loading) {
      return <Loader/>
  }

  return (
    <>
        {!loading && <LinkList links={links}/>}
    </>
  );
};
