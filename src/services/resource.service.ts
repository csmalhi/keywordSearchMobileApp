import { Resource } from "../models/resources";
import { mergeMap, of, take } from "rxjs";
import { User } from "../models/user";
import { getDoc, doc } from "firebase/firestore";

const ResourceService = {
  getResources: async function (auth: any, db: any) {
    let userId = auth.currentUser.uid;
    const aggregate = await getDoc(doc(db, `users/${userId}/aggregate/aggregate`))
    return aggregate.data()
  },
  getResource: function (resourceId: string) {},
  addResource: function (resource: Resource) {},
  removeResource: function (resourceId: string) {},
  updateResource: function (resource: Resource) {},
};

export default ResourceService;
