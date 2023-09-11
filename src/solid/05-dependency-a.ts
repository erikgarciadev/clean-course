//https://gist.github.com/Klerith/29bc2af9e4df3e30cb9ea60d532618e9
import { PostService } from "./05-dependency-b";
import {
  JsonDatabaseService,
  LocalDataBaseService,
  WebApiPostService,
} from "./05-dependency-c";

// Main
(async () => {
  //   const provider = new JsonDatabaseService();
  //   const provider = new LocalDataBaseService();
  const provider = new WebApiPostService();
  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
