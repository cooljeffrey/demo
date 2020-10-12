import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Container, Box, Typography } from "@material-ui/core"

import ProTip from "../components/pro-tip"
import Virtulize from "../components/search2"

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Filter 10,000 items dynamically
        </Typography>
        <Virtulize />
      </Box>
    </Container>
  )
}
