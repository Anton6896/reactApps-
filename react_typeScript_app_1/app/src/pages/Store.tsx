import { useEffect, useState } from "react";
import { fetchItems } from "../utils/util";
import { ItemComponent } from "../components/ItemComponent";
import { ItemComponentProps } from "../types/Types";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export function Store() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      let data = await fetchItems();
      setItems(data);
      console.log(data);
    }

    if (items.length < 1) getItems();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items.map((item: ItemComponentProps) => (
          <Grid item xs={4} sm={4} md={4} key={item.id}>
            <ItemComponent {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
