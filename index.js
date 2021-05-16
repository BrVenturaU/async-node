const axiosMethods = require('./axios-module');
const post = {
    "userId": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };

  const put = {
    "userId": 1,
    "id": 1,
    "title": "Mi titulo",
    "body": "lorem lorem"
  };

console.clear();
const main = async () => {
  console.log("Loading...");
  await axiosMethods.get(2, true);
  // await axiosMethods.getById(1);
  // await axiosMethods.post(post, data => console.log(data));
  // await axiosMethods.put(put.id, put, data => console.log(data));
  // await axiosMethods.deletePost(1);
}

main();


