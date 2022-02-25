import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
// import { makeStyles } from "@mui/core/styles";

// const useStyles: any = makeStyles({
//   table: {
//     maxWidth: "250px",
//   },
//   tableHeadCell: {
//   fontWeight: 600,
//   p: "2px 5px 5px 5px",
//   border: "none",
//   },
//   tableBodyCell: {
//     p: "0px 5px 0px 5px",
//     fontSize: "0.7rem",
//     border: "none",
//   },
// });

/**
 * (optional)If we can import makeStyles from MUI, then we can define an useStyle object to apply styles on repeated tablecell component
 */

interface WDInfoDisplayProps {
  title: string;
  gameTime: string;
  phase: string;
  season: string;
  year: string;
  gameType: string;
  playType: string;
  rank: string;
  /**
   * game setting datas which would be passed to the component by parent component/ context/redux store
   */
}

const WDInfoDisplay: React.FC<WDInfoDisplayProps> = function ({
  title,
  gameTime,
  phase,
  season,
  year,
  gameType,
  playType,
  rank,
}) {
  // const classes: any = useStyles();
  /**
   *(optional) by defining classes object, we can apply styles to specific table element by adding className with classes's properties
   */
  const tableCellStyles = {
    p: "0px 5px 0px 5px",
    fontSize: "0.7rem",
    border: "none",
  };
  return (
    <TableContainer>
      <Table
        // className={classes.table}
        /**
         *(optional) to style repeated table component
         */
        sx={{
          maxWidth: "250px",
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              // className={classes.tableHeadCell}
              /**
               *(optional) to style repeated table component
               */
              sx={{
                fontWeight: 600,
                p: "2px 5px 5px 5px",
                border: "none",
              }}
            >
              <div
                style={{
                  lineHeight: "1.2rem",
                  maxHeight: "2.4rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  wordWrap: "break-word",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  /**
                   * by applying CSS properties, the title of the game would be able to wrap until the second line
                   * for the second line display '...' to show it being cut-off
                   */
                }}
              >
                {title}
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              // className={classes.tableBodyCell}
              /**
               *(optional) to style repeated table component
               */
              sx={tableCellStyles}
            >
              Next phase in: {gameTime}, {phase},
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              // className={classes.tableBodyCell}
              sx={tableCellStyles}
            >
              Pot: 35 - {season} {year}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              // className={classes.tableBodyCell}
              sx={tableCellStyles}
            >
              {gameType}, {playType}, {rank}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WDInfoDisplay;
