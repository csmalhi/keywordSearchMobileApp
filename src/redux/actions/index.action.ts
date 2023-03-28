import { Keyword } from "../../models/keyword";
import { Aggregate, Resource } from "../../models/resources";

export const GET_RESOURCES = "[Resources API] Get user resources library";

export const GET_RESOURCES_SUCCESS =
  "[Resources API] Get user resources library Success";

export const GET_RESOURCES_FAILURE =
  "[Resources API] Get user resources library Failure";

export const GET_RESOURCE = "[Resources API] Get user resource";

export const GET_RESOURCE_SUCCESS = "[Resources API] Get user resource Success";

export const GET_RESOURCE_FAILURE = "[Resources API] Get user resource Failure";

export const ADD_RESOURCE = "[Resources API] Add resource to library";

export const ADD_RESOURCE_SUCCESS =
  "[Resources API] Add resource to library Success";

export const ADD_RESOURCE_FAILURE =
  "[Resources API] Add resource to library Failure";

export const REMOVE_RESOURCE = "[Resources API] Remove resource in library";

export const REMOVE_RESOURCE_SUCCESS =
  "[Resources API] Remove resource in library Success";

export const REMOVE_RESOURCE_FAILURE =
  "[Resources API] Remove resource in library Failure";

export const UPDATE_RESOURCE = "[Resources API] Update resource in library";

export const UPDATE_RESOURCE_SUCCESS =
  "[Resources API] Update resource in library Success";

export const UPDATE_RESOURCE_FAILURE =
  "[Resources API] Update resource in library Failure";

export const SELECT_RESOURCE = "[Resources] Select resource";

// File upload Actions
export const FILE_UPLOAD = "[File Upload] Upload file to firestore";

export const FILE_UPLOAD_SUCCESS =
  "[File Upload] Upload file to firestore Success";

export const FILE_UPLOAD_FAILURE =
  "[File Upload] Upload file to firestore Failure";

export const SELECT_KEYWORDS = "[Keyword] Upadte matched keywords";

export const getResourcesAction = () => ({
  type: GET_RESOURCES,
});

export const getResourcesSuccessAction = (aggregate: Aggregate) => ({
  type: GET_RESOURCES_SUCCESS,
  payload: aggregate,
});

export const getResourcesFailureAction = (error: any) => ({
  type: GET_RESOURCES_FAILURE,
  payload: error,
});

export const getResourceAction = (resourceId: string) => ({
  type: GET_RESOURCE,
  payload: resourceId,
});

export const getResourceSuccessAction = (resource: Resource) => ({
  type: GET_RESOURCE_SUCCESS,
  payload: resource,
});

export const getResourceFailureAction = (error: any) => ({
  type: GET_RESOURCE_FAILURE,
  payload: error,
});

export const addResourceAction = (newResource: Resource) => ({
  type: ADD_RESOURCE,
  payload: newResource,
});

export const addResourceSuccessAction = () => ({
  type: ADD_RESOURCE_SUCCESS,
});

export const addResourceFailureAction = (error: any) => ({
  type: ADD_RESOURCE_FAILURE,
  payload: error,
});

export const removeResourceAction = (resourceId: string) => ({
  type: REMOVE_RESOURCE,
  payload: resourceId,
});

export const removeResourceSuccessAction = () => ({
  type: REMOVE_RESOURCE_SUCCESS,
});

export const removeResourceFailureAction = (error: any) => ({
  type: REMOVE_RESOURCE_FAILURE,
  payload: error,
});

export const updateResourceAction = (updatedResource: Resource) => ({
  type: UPDATE_RESOURCE,
  payload: updatedResource,
});

export const updateResourceSuccessAction = () => ({
  type: UPDATE_RESOURCE_SUCCESS,
});

export const updateResourceFailureAction = (error: any) => ({
  type: UPDATE_RESOURCE_FAILURE,
  payload: error,
});

export const selectResourceAction = (selectedResource: Resource) => ({
  type: SELECT_RESOURCE,
  payload: selectedResource,
});

// File upload Actions
export const fileUploadAction = (file: any) => ({
  type: FILE_UPLOAD,
  payload: file,
});

export const fileUploadSuccessAction = () => ({
  type: FILE_UPLOAD_SUCCESS,
});
export const fileUploadFailureAction = (error: any) => ({
  type: FILE_UPLOAD_FAILURE,
  payload: error,
});

export const selectKeywordsAction = (keywords: Keyword[]) => ({
  type: SELECT_KEYWORDS,
  payload: keywords,
});
