import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
              <div className="flex gap-4 justify-between">
                <img
                  src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/434082527_939844594247311_2645662880283892366_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wt_mGlbAyM8Ab4gL94i&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAoh31kLTntixaxIeq20uonnoZo7tiFNrjpqtMx5gW3hA&oe=661A7D35"
                  alt="girlfriend"
                  className="w-1/3"
                />
                <img
                  src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/434944243_947698446795259_7947659759133590943_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3laei-gWb04Ab7bynLZ&_nc_ht=scontent.fhan14-3.fna&oh=00_AfALUXOegJCPaTrD5A8Ir5CjxGkIWP4jk4NLLJqndliecw&oe=661A7896"
                  alt="girlfriend"
                  className="w-1/3"
                />
                <img
                  src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/434660513_405432178797380_4780880677956785688_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wPrPlDs1LHMAb4A-OMw&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCxXOx-RZBR2yWuNuGJe40-iLfPcrkrslBJTPrCx6IInQ&oe=661A666A"
                  alt="girlfriend"
                  className="w-1/3"
                />
              </div>
            </Layout>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        ></Route>

        <Route
          path="/register"
          element={
            <Layout>
              <Register></Register>
            </Layout>
          }
        ></Route>

        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn></SignIn>
            </Layout>
          }
        ></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
