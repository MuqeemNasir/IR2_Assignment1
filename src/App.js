import { use } from "react";
import "./styles.css";

// Question 1

const BooksList = ({ books }) => {
  const filteredBook = books.filter((book) => book.genre === "Science Fiction");

  const bookListing = filteredBook.map((book) => (
    <div key={book}>
      <h3>Title: {book.title}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  ));

  return (
    <>
      <h2>Book Details</h2>
      {bookListing}
    </>
  );
};

const books = [
  { id: 1, title: "Dune", genre: "Science Fiction" },
  { id: 2, title: "Neuromancer", genre: "Science Fiction" },
  { id: 3, title: "Foundation", genre: "Sci-fi" },
];

// Question 2

const UsersList = ({ users }) => {
  const filteredUser = users.filter((user) => user.role === "Admin");

  const userListing = filteredUser.map((user) => (
    <div key={user.id}>
      <h3>Name: {user.name}</h3>
      <p>Role: {user.role}</p>
    </div>
  ));

  return (
    <>
      <h2>User Details</h2>
      {userListing}
    </>
  );
};

const users = [
  { id: 1, name: "Alice", role: "User" },
  { id: 2, name: "Bob", role: "Admin" },
  { id: 3, name: "Charlie", role: "User" },
  { id: 4, name: "John", role: "Admin" },
];

// Question 3

const ProductsList = ({ products }) => {
  const filteredProducts = products.filter((pro) => pro.price > 100);

  const productListing = filteredProducts.map((pro) => (
    <div key={pro.id}>
      <h3>Name: {pro.name}</h3>
      <p>Price: {pro.price}</p>
      <p>Features</p>
      <ul>
        <li>Color: {pro.features.color}</li>
        <li>isWaterProof: {pro.features.isWaterProof ? "Yes" : "No"}</li>
      </ul>

      {/* <p>
        Features: Color - {pro.features.color}, isWaterProof -{" "}
        {pro.features.isWaterProof ? "Yes" : "No"}
      </p> */}
    </div>
  ));

  return (
    <>
      <h2>Product Details</h2>
      {productListing}
    </>
  );
};

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    features: { color: "green", isWaterProof: false },
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    features: { color: "blue", isWaterProof: true },
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    features: { color: "silver", isWaterProof: false },
  },
];

// Question 4

const CitiesList = ({ cities }) => {
  const filteredCities = cities.filter((city) => city.population > 1000000);

  const citiesListing = filteredCities.map((city) => (
    <div key={city.id}>
      <h3>Name: {city.name}</h3>
      <p>Population: {city.population}</p>
    </div>
  ));

  return (
    <>
      <h2>Cities Details</h2>
      {citiesListing}
    </>
  );
};

const cities = [
  { id: 1, name: "New York", population: 8500000 },
  { id: 2, name: "Los Angeles", population: 539900 },
  { id: 3, name: "Chicago", population: 2700000 },
];

// Question 5

const MoviesList = ({ movies }) => {
  const filteredMovies = movies.filter((movie) => movie.releaseYear > 2015);

  const movieListing = filteredMovies.map((movie) => (
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  ));

  return (
    <>
      <h2>Movies Details</h2>
      {movieListing}
    </>
  );
};

const movies = [
  { id: 1, title: "Inception", releaseYear: 2010 },
  { id: 2, title: "La La Land", releaseYear: 2016 },
  { id: 3, title: "Interstellar", releaseYear: 2014 },
  { id: 4, title: "Dune 2", releaseYear: 2024 },
];

// Question 6

const PodcastsList = ({ podcasts }) => {
  const filteredPodcast = podcasts.filter((pod) => pod.featured === true);

  const podcastListing = filteredPodcast.map((pod) => (
    <div key={pod.id}>
      <h3>Title: {pod.title}</h3>
      <p>Host: {pod.host.join(", ")}</p>
      <p>Feautred: {pod.featured ? "Yes" : "No"}</p>
    </div>
  ));

  return (
    <>
      <h2>Podcasts Details</h2>
      {podcastListing}
    </>
  );
};

const podcasts = [
  { id: 1, title: "Tech Talk", host: ["host 1"], featured: true },
  { id: 2, title: "Business Insights", host: ["host 2"], featured: false },
  { id: 3, title: "Science Hour", host: ["host 3", "host 4"], featured: true },
];

// Question 7

const MovieList = ({ movie }) => {
  const filteredMovie = movie.filter((mov) => mov.releaseYear >= 2000);

  const totalDuration = filteredMovie.reduce(
    (acc, curr) => acc + curr.duration,
    0
  );

  const averageDuration = totalDuration / filteredMovie.length;

  const moviesListing = filteredMovie.map((mov) => (
    <div key={mov.id}>
      <h3>Title: {mov.title}</h3>
      <p>Duration: {mov.duration}</p>
      <p>Release Year: {mov.releaseYear}</p>
    </div>
  ));

  return (
    <>
      <h2>Average Duration of Movies: {averageDuration}</h2>
      {moviesListing}
    </>
  );
};

const movie = [
  { id: 1, title: "The Matrix", duration: 136, releaseYear: 1999 },
  { id: 2, title: "Inception", duration: 148, releaseYear: 2010 },
  { id: 3, title: "Avatar", duration: 162, releaseYear: 2009 },
];

// Question 8

const TasksList = ({ tasks }) => {
  const filteredTask = tasks.filter((task) => task.completed === true);

  const taskListing = filteredTask.map((task) => (
    <div key={task.id}>
      <h3>Description: {task.description}</h3>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>
    </div>
  ));

  return (
    <>
      <h2>Total Completed Tasks: {filteredTask.length}</h2>
      {taskListing}
    </>
  );
};

const tasks = [
  { id: 1, description: "Complete project proposal", completed: true },
  { id: 2, description: "Review client feedback", completed: false },
  { id: 3, description: "Submit final report", completed: true },
];

// Question 9

const VehiclesList = ({ vehicles }) => {
  const totalDistance = vehicles.reduce((acc, curr) => acc + curr.distance, 0);

  const vehicleListing = vehicles.map((veh) => (
    <div key={veh.id}>
      <h3>Name: {veh.name}</h3>
      <p>Distance: {veh.distance}</p>
    </div>
  ));

  return (
    <>
      <h2>Total Distance Traveled: {totalDistance}</h2>
      {vehicleListing}
    </>
  );
};

const vehicles = [
  { id: 1, name: "Car", distance: 150 },
  { id: 2, name: "Bicycle", distance: 10 },
  { id: 3, name: "Motorcycle", distance: 75 },
];

// Question 10

const SalesList = ({ sales }) => {
  const totalRevenue = sales.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const saleListing = sales.map((sale) => (
    <div key={sale.id}>
      <h3>Product: {sale.product}</h3>
      <p>Price: {sale.price}</p>
      <p>Quantity: {sale.quantity}</p>
    </div>
  ));

  return (
    <>
      <h2>Total Revenue: {totalRevenue}</h2>
      {saleListing}
    </>
  );
};

const sales = [
  { id: 1, product: "Widget A", price: 25, quantity: 10 },
  { id: 2, product: "Gadget B", price: 50, quantity: 5 },
  { id: 3, product: "Tool C", price: 30, quantity: 8 },
];

export default function App() {
  return (
    <main>
      <BooksList books={books} />
      <hr />
      <UsersList users={users} />
      <hr />
      <ProductsList products={products} />
      <hr />
      <CitiesList cities={cities} />
      <hr />
      <MoviesList movies={movies} />
      <hr />
      <PodcastsList podcasts={podcasts} />
      <hr />
      <MovieList movie={movie} />
      <hr />
      <TasksList tasks={tasks} />
      <hr />
      <VehiclesList vehicles={vehicles} />
      <hr />
      <SalesList sales={sales} />
      <hr />
    </main>
  );
}
