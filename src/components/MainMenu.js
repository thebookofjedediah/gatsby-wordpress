import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const MainMenyWrapper = styled.div`
  display: flex;
  background-color: #21412a;
`

const MenuItem = styled(Link)`
  color: #ffffff;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`

const MainMenu = props => (
  <StaticQuery
    query={graphql`
      {
        allWordpressMenusMenusItems(filter: { name: { eq: "main-menu" } }) {
          edges {
            node {
              name
              items {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenyWrapper>
        {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
          <MenuItem to={item.slug} key={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </MainMenyWrapper>
    )}
  />
)

export default MainMenu
