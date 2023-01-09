import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_APP_AIRTABLE_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + process.env.VUE_APP_AIRTABLE_TOKEN
  }
})

/**
func_getAll() {
  console.log("DEU GET");
  // axios.get('/hero?filter[publisher]=Marvel+Comics')
  axios
    .get("/hero")
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
},
func_getOne(id) {
  console.log("DEU GET");
  axios
    .get("/hero/" + id)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
},
func_post() {
  var miranha = new Hero("Homem-Aranha", "foto", "bio", "Marvel Comis");
  console.log(miranha);
  axios
    .post("/hero", { heroi: miranha })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
},
func_put(id) {
  var miranha = new Hero("Miranhas", "fotos", "bios", "Marvel Comics");
  console.log(miranha);
  axios
    .put("/hero/" + id, { heroi: miranha })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
},
func_delete(id) {
  console.log("DEU DELETE");
  axios
    .delete("/hero/" + id)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
},
*/