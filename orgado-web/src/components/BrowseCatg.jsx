import React from 'react'
import "../assets/Styles/BrowseCatg.css";
import image1 from "../assets/images/browse-cat/image1.png"
import image2 from "../assets/images/browse-cat/image2.png"
import image3 from "../assets/images/browse-cat/image3.png"
import image4 from "../assets/images/browse-cat/image4.png"



const categories = [
    {
        id: 1,
        title: "Fruit & Vegetable",
        bgColor: "#EEF6EB",
        items: ["Cauliflower", "Orange", "Cucumber", "Banana", "Potato", "Strawberry"],
        image: image1
    },
    {
        id: 2,
        title: "Dairy Product",
        bgColor: "#F7F6EE", 
        items: ["Butter", "Chocolate", "Honey", "Cheese", "Ice Cream", "Milk"],
        image: image2
    },
    {
        id: 3,
        title: "Grocery & Staple",
        bgColor: "#E9F5FA", 
        items: ["Noodle", "Oils", "Onion", "Red Gram", "Rice", "Flavor"],
        image: image3
    },
    {
        id: 4,
        title: "Miscellaneous",
        bgColor: "#FDF0EE",
        items: ["Nut & Seed", "Oils", "Fruits", "Tomatoe", "Soup", "More Product"],
        image: image4
    }
];

const BrowseCatg = () => {
    return (
        <section className="category-browse-area mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8">
                        <div className="bd-section__title">
                            <h2 style={{ fontWeight: "700", color: "#1a1a1a" }}>Browse by Category</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="bd-section__btn-wrapper text-md-end">
                            <a href="/categories" className="btn-view-all">
                                View All Category
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {categories.map((cat) => (
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mt-1" key={cat.id}>
                            <div
                                className="category-card"
                                style={{ backgroundColor: cat.bgColor }}
                            >
                                <div className="category-content">
                                    <h4 className="category-title">{cat.title}</h4>
                                    <ul className="category-list">
                                        {cat.items.map((item, index) => (

                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="category-img">
                                    <img src={cat.image} alt={cat.title} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default BrowseCatg