import { style } from "@vanilla-extract/css"

import { breakpoints, tokens } from "@viriditas/theme/theme.css"
import { blockquote } from "../Blockquote/blockquote.css"
import { listItem } from "../Lists/listItem.css"

export const paragraph = style({
  color: tokens.color.articleText,
  fontFamily: tokens.font.book,
  fontSize: "22px",
  lineHeight: "1.756",
  margin: "0 auto 35px",
  transition: tokens.motion.colorModeTransition,
  width: "100%",

  "@media": {
    [breakpoints.tablet]: {
      margin: "0 auto 25px",
    },
    [breakpoints.phablet]: {
      padding: "0 20px",
    },
  },

  selectors: {
    [`${blockquote} &`]: {
      fontFamily: tokens.font.serif,
      maxWidth: "880px !important",
      paddingRight: "100px",
      paddingBottom: "0",
      width: "100%",
      margin: "0 auto",
      fontSize: "36px",
      lineHeight: "1.32",
      fontWeight: "bold",

      "@media": {
        [breakpoints.tablet]: {
          fontSize: "26px",
          padding: "0 180px",
        },
        [breakpoints.phablet]: {
          fontSize: "36px",
          padding: "0 20px 0 40px",
        },
      },
    },
    [`${listItem} &`]: {
      "@media": {
        [breakpoints.tablet]: {
          padding: 0,
        },
      },
    },
  },
})