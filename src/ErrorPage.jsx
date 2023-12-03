import { css } from "@emotion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1976d2; // mui palette.primary.main
`;

const textsContainer = css`
  margin-bottom: 20vh;
`;

const textStyle = css`
  color: white;
  font-family: "Roboto";
  font-weight: 300;
`;

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <div css={containerStyle}>
      <div css={textsContainer}>
        <h1 css={textStyle}>Oops, something went wrong...</h1>
        <h2 css={textStyle}>Please, try to refresh</h2>
      </div>
    </div>
  );
}

export default ErrorPage;
