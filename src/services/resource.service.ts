import { Resource } from "../models/resources";
import { mergeMap, of, take } from 'rxjs';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { User } from "../models/user";

const ResourceService = {
    getResources: function() {
        const userResources = auth().onAuthStateChanged((user) => {
            const userRef: any= firestore()
            .collection('users')
            .doc(`${user?.uid}`);
          return userRef.collection('resources').valueChanges().pipe(take(1));
        })      
        return userResources;
    },
    getResource: function(resourceId: string) {
    },
    addResource: function(resource: Resource) {
    },
    removeResource: function(resourceId: string) {
    },
    updateResource: function(resource: Resource) {
    },
};

export default ResourceService;
