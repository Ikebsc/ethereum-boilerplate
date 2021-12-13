import { Button, Card, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

const { Text } = Typography;
const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    height: "60vh",
    backgroundColor: "rgba(5 179 203/ 29%)",
    boxShadow: "0 0.5rem 1.2rem rgb(224 227 10 / 65%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
    display: "flex",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();
  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch]
  );

  return (
    <div className="first">
      <div className="container">
        <Button className="btn">
          <Link to="/1inch"> Enter App </Link>
        </Button>
        <Button className="btn">
          <a
            href="https://www.iketoken.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy IkeToken
          </a>
        </Button>
      </div>
    </div>
  );
}
