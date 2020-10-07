import { Link } from "react-router-dom";
import styled from "styled-components";

// This could be react-router-dom's Link for example
// export default StyledLink = styled(Link)`
//   display: block;
//   color: #f51963;
//   text-decoration: none;
// `;

const listItemStyle = styled(listItem)`
  display: inline-block;
  text-decoration: none;
  margin: 10px;
`;

export default listItemStyle;
