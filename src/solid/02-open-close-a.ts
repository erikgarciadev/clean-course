//https://gist.github.com/Klerith/6e23c35f9c00bf216ced71b04cfe4fbe
import { PhotosService, PostService, TodoService } from "./02-open-close-b";
import { HttpClient } from "./02-open-close-c";

(async () => {
  const htppClient = new HttpClient();
  const todoService = new TodoService(htppClient);
  const postService = new PostService(htppClient);
  const photosService = new PhotosService(htppClient);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
