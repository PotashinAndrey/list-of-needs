const Body = {
  margin: 0,
  padding: 0,
  border: 0,
  display: "grid",
  gridTemplateColumns: "2fr 5fr 3fr 2fr",
  gridTemplateRows: "1fr 1fr 8fr",
  gridTemplateAreas: `". list score ." ". list search ." ". list info ."`,
  gridGap: "5px",
  height: "98vh",
  boxSizing: "border-box"
}

const List = {
  gridArea: "list",
  height: "100vh ",
  boxShadow: "0 2px 10px #555",
  // marginTop: "5px",
  // marginBottom: "5px"
  // backgroundColor: "red"
}

const Score = {
  gridArea: "score",
  height: "20vh ",
  // backgroundColor: "green",
  boxShadow: "0 2px 10px #555"
}

const Search = {
  gridArea: "search",
  height: "20vh ",
  // backgroundColor: "gold",
  boxShadow: "0 2px 10px #555"
}

const Info = {
  gridArea: "info",
  height: "59vh ",
  // backgroundColor: "pink",
  boxShadow: "0 2px 10px #555"
}

export const styles = {
  Body: Body,
  List: List,
  Score: Score,
  Search: Search,
  Info: Info
}

