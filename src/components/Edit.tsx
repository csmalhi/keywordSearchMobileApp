import React from "react";
import { Stack, TextInput, Button  } from "@react-native-material/core";

export type Props = {
  toggleEditMode: any;
};

const Edit: React.FC<Props> = ({toggleEditMode}) => (
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

export default Edit;
