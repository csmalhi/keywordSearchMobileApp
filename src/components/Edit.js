import React from "react";
import { Stack, TextInput, Button  } from "@react-native-material/core";

export default Edit = ({toggleEditMode}) => (
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
    <Button title={'Cancel'}             
      onPress={() => toggleEditMode(false)}
    ></Button>
  </Stack>
);
