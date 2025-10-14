import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faMagnifyingGlass, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  quantity?: number;
};

type CategoryType = {
  slug: string;
  name: string;
  url: string;
};
type product ={
  id: number;
  title: string;
  price: number;
  image: string;

}


function Navigation(){
const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [cart,setcart]=useState<product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<ProductType[]>([]);
   // Fetch products
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
        .catch((err) => console.error("Error fetching products:", err));
    }, []);
  
    // Fetch categories
    useEffect(() => {
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    // Handle search button
    const handleSearch = () => {
      if (searchTerm.trim() !== "") {
        navigate(`/search/${searchTerm}`);
        setSearchTerm("");
      }
    };

  // Handle input change for suggestions
      const handleInputChange = (value: string) => {
        setSearchTerm(value);
        if (value.trim() === "") {
          setSuggestions([]);
        } else {
          const filtered = products.filter((p) =>
            p.title.toLowerCase().includes(value.toLowerCase())
          );
          setSuggestions(filtered.slice(0, 5)); // max 5 suggestions
        }
      };

    const addToCart =(product:product) =>{
      setcart((prev)=>[...prev,product]);
    }
    const navigate=useNavigate();

  return (
    <>
      <div className="navigation-bar">
        {/* Logo */}
        <div className="logo">
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg" alt="logo" />
        </div>
        {/* Location */}
        <div className="location-section">
          <div className="location-icon">
            <FontAwesomeIcon icon={faLocationPin} className="location-icon" />
          </div>
          <div className="address">
            <p className="location-add">
              Delivering to Coimbatore641015
              <span className="update-location">Update location</span>
            </p>
          </div>
        </div>
        {/* Search Bar */}
        <div className="search-bar" style={{ position: "relative" }}>
      <select className="drop-down" 
      id="search-dropdown-menu"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      >

        <option value="all" >All</option>
          {categories.map((cat) => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>
          <input
            type="text"
            className="search-input"
            placeholder="Search Amazon.in"
             value={searchTerm}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <button 
          className="search-btn"
           id="search-button"
            type="button"
            onClick={handleSearch}
            >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
           {/* Suggestion Dropdown */}
          {suggestions.length > 0 && (
            <div className="suggestion-dropdown">
              {suggestions.map((s) => (
                <div
                  key={s.id}
                  className="suggestion-item"
                  onClick={() => {
                    setSearchTerm(s.title);
                    setSuggestions([]);
                    navigate(`/search/${s.title}`);
                  }}
                >
                  {s.title}
                </div>
              ))}
            </div>
          )}
        </div>

        
        {/* Language */}
        <div className="language">
          <div className="lang-section">
            <img className="flag" src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg" alt="language" />
            <p className="lan-eng">EN</p>
          </div>
          <span className="arrow-lan">&#9660;</span>
          {/* hover-language */}
          <div className="lan-hov">
            <div className="arrow-up"></div>
            <form className="lan-form">
              <input type="radio" name="language" value="english" /> English<br />
              <input type="radio" name="language" value="hindi" /> Hindi<br />
              <input type="radio" name="language" value="tamil" /> Tamil<br />
              <input type="radio" name="language" value="telugu" /> Telugu<br />
            </form>
          </div>
        </div>
        {/* Sign-in */}
        <div className="sign-in">
          <p className="hello-sign-in">Hello, Sign in</p>
          <p className="account-sign-in">
            Account & Lists <span className="arrow-sign">&#9660;</span>
          </p>
        </div>
        {/* Orders */}
        <div className="order">
          <p className="returns">
            Returns<span className="orders">&Orders</span>
          </p>
        </div>
        {/* Cart */}
            <div
      className="cart"
      onClick={() => navigate("/cart", { state: { cart } })}
    >
      <span className="add-cart">{cart.length}</span>
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <p className="cart-name">cart</p>
    </div>

      </div>
      {/* product -list */}
      <div
  className="product-container"
>
  {products
    .filter((p) =>
      selectedCategory && selectedCategory !== "all" ? p.category === selectedCategory : true
    )
    .filter((p) =>
      searchTerm.trim() !== "" 
        ? p.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    )
    .map((product) => (
      <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
        <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button
          className="add-to-cart"
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.thumbnail,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    ))}
</div>
    </>
  );
}

export default Navigation;

