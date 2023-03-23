import React from "react";
import { Stack, TextInput,  } from "@react-native-material/core";

export default Edit = ({selectedItem}) => (
  <Stack spacing={2} >
    <TextInput
      label="Name"
      variant="outlined"
    />
    <TextInput
      label="Description"
      variant="outlined"
    />
    <TextInput
      label="Image URL"
      variant="outlined"
    />
    <TextInput
      label="Description"
      variant="outlined"
    />
  </Stack>
);
