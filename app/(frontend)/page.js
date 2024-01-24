import React from 'react';
import Hero from '../components/frontend/home/hero';
import Spotlight from '../components/frontend/home/spotlight';
import Destination from '../components/frontend/home/destination';
import Explore from '../components/frontend/home/explore';
import Services from '../components/frontend/home/services';
import Reviews from '../components/frontend/home/reviews';
import WhyChoose from '../components/frontend/home/whyChoose';
import Discover from '../components/frontend/home/discover';


const dummyData = {
    "data": {
        "title": "landing page",
        "content": {
            "hero_section": {
                "images": [
                    1,
                    2
                ],
                "title": "Step into",
                "sub_title": "MAGNIFICENCE",
                "card": {
                    "title": "Welcome to Wilh. Loesch Travel - A Journey Beyond The Ordinary!",
                    "sub_title": "Embark on a journey of discovery with Wilh. Loesch Travel. As passionate explorers, we're committed to crafting bespoke travel experiences that transcend the ordinary. Whether you seek cultural immersion, thrilling adventures or serene escapes, we're here to make your travel dreams a reality."
                }
            },
            "why_seciotn": {
                "title": "Why Choose Wilh. Loesch?",
                "card": [
                    {
                        "image": 1,
                        "title": "EXPERTISE",
                        "description": "Our team of Vietnam enthusiasts combines local insights with a global perspective."
                    },
                    {
                        "image": 2,
                        "title": "CUSTOMIZATION",
                        "description": "Tailor your journey with adventures, culture, or relaxation. We make it happen."
                    },
                    {
                        "image": 3,
                        "title": "EXCEPTIONAL SERVICE",
                        "description": "Committed to an extraordinary experience with attention to detail, impeccable service, and excellence."
                    }
                ]
            },
            "service_section": {
                "heading": "SERVICE",
                "title": "Tailored Experiences, Seamless Travel",
                "description": "We specialize in tailoring experiences to suit your unique travel style. Our services encompass meticulously planned itineraries, exclusive tours, luxury accommodations and expert guidance. Whether it's a solo expedition, a family getaway or a corporate retreat, our attention to detail ensures every moment of your journey is unforgettable.",
                "card": [
                    {
                        "icon": "./ser1.png",
                        "title": "Cultural Immersion",
                        "description": "Immerse yourself in the rich tapestry of Vietnam's culture, exploring its traditions and heritage."
                    },
                    {
                        "icon": "./hiking.png",
                        "title": "Adventure & Nature Tours",
                        "description": "Our curated tours blend excitement with serene landscapes, promising unforgettable experiences.."
                    },
                    {
                        "icon": "./culinary.png",
                        "title": "Culinary Delights",
                        "description": "Indulge your palate in the exquisite flavors of Vietnam, from street food to gourmet cuisine.."
                    },
                    {
                        "icon": "./beach.png",
                        "title": "Luxury Escape",
                        "description": "Experience opulence and relaxation with our curated luxury escapes, ensuring an extraordinary stay"
                    }
                ]
            },
            "discover_section": {
                "heading": "SERVICE",
                "title": "Discover Extraordinary Places",
                "description": "Explore our handpicked destinations that promise to ignite your wanderlust. From exotic corners of Vietnam to renowned landmarks, our collection includes diverse landscapes, vibrant cultures and hidden gems waiting to be uncovered.",
                "card": [
                    {
                        "image": "./discover.jpg",
                        "title": "Cultural Immersion",
                        "points": [
                            "Experience the idyllic beaches of Nha Trang.",
                            "Experience the idyllic beaches of Nha Trang.",
                            "Experience the idyllic beaches of Nha Trang."
                        ]
                    },
                    {
                        "image": "./discover.jpg",
                        "title": "The Mekong Delta: River of Life",
                        "points": [
                            "Experience the idyllic beaches of Nha Trang.",
                            "Experience the idyllic beaches of Nha Trang.",
                            "Experience the idyllic beaches of Nha Trang."
                        ]
                    }
                ]
            },
            "next_section": {
                "image": "./explore.jpg",
                "title": "Find the next place to visit",
                "sub_title": "EXPLORE VIETNAM"
            }
        }
    }
}

const HomePage = () => {
    return (
        <div>
            <Hero hero={dummyData} />
            <WhyChoose why={dummyData} />
            <Services service={dummyData} />
            <Discover discovery={dummyData} />
            <Reviews />
            <Explore explore={dummyData} />
        </div>
    );
};

export default HomePage;