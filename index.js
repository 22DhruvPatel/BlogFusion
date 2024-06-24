import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");



//Array to store blogs
const blogs = [];
let blogId = 1;  //counter for generating unique ids




app.get("/", (req,res) => {
  // console.log("Hello Dhruv");
  res.render("index.ejs");
})

app.get("/yourblogs", (req,res) => {
  res.render("index3.ejs", { blogs });
})

app.get("/new", (req,res) => {
  res.render("index2.ejs");
})


app.post("/new", (req,res) => {
  const {blogtitle, content} = req.body;
  const id = blogId++; //Generate a unique identifier for each blog
  blogs.push( { id, blogtitle, content});
  console.log("Blog is created");
  res.redirect("/yourblogs");
  
})

app.get("/blog/:id", (req,res) => {
  const blog = blogs.find(b => b.id == req.params.id);
  if (blog) {
    res.render("blog", { blog });
  } else {
    res.status(404).send("<h1><i>Page not found. Go back to home page.</i></h1>");
}
});


app.listen(port, () => {
  console.log(`Server is now live on port ${port}.`);
})


