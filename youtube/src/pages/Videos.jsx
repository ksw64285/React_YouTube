import React from "react";
import { useParams } from "react-router-dom";

export default function NotFound() {
  const { keyword } = useParams();
  return <div>Videos {keyword ? `${keyword} 검색` : "핫트렌드"}</div>;
}
