const items = [
    {
        name: "Classic T-shirt",
        price: 19.99,
        category: "Clothing",
        description: "A comfortable cotton t-shirt for everyday wear.",
        image: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg'
    },
    {
        name: "Running Shoes",
        price: 89.99,
        category: "Footwear",
        description: "Lightweight and breathable running shoes.",
        image: "https://images.pexels.com/photos/19090/pexels-photo.jpg"
    },
    {
        name: "Leather Wallet",
        price: 49.99,
        category: "Accessories",
        description: "A sleek leather wallet with multiple compartments.",
        image: "https://media.istockphoto.com/id/2159028234/photo/wallet-with-coins-and-credit-card-on-purple-background.jpg?b=1&s=612x612&w=0&k=20&c=RYPIPzVDd7iYW2ayC0yGZDpyCfXZJMlpAyYE5o11dVg="
    },
    {
        name: "Bluetooth Headphones",
        price: 59.99,
        category: "Electronics",
        description: "Wireless headphones with high-quality sound.",
        image: "https://images.pexels.com/photos/2614384/pexels-photo-2614384.jpeg"
    },
    {
        name: "Wrist Watch",
        price: 149.99,
        category: "Accessories",
        description: "A stylish watch that complements every outfit.",
        image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
    },
    {
        name: "Backpack",
        price: 39.99,
        category: "Bags",
        description: "A durable backpack with multiple pockets.",
        image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg"
    },
    {
        name: "Sunglasses",
        price: 29.99,
        category: "Accessories",
        description: "UV protection sunglasses with modern frames.",
        image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        description: "Latest smartphone with high performance and camera.",
        image: "https://images.pexels.com/photos/29645172/pexels-photo-29645172.jpeg"
    },
    {
        name: "Wireless Mouse",
        price: 24.99,
        category: "Electronics",
        description: "Ergonomic wireless mouse with adjustable DPI.",
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
    },
    {
        name: "Yoga Mat",
        price: 34.99,
        category: "Fitness",
        description: "Non-slip yoga mat for all kinds of workouts.",
        image: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg"
    },
    {
        name: "Desk Lamp",
        price: 22.99,
        category: "Home Decor",
        description: "A modern desk lamp with adjustable brightness.",
        image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg"
    },
    {
        name: "Coffee Mug",
        price: 14.99,
        category: "Kitchen",
        description: "Ceramic mug perfect for hot beverages.",
        image: "https://images.pexels.com/photos/33778381/pexels-photo-33778381.jpeg"
    },
    {
        name: "Gaming Chair",
        price: 199.99,
        category: "Furniture",
        description: "Comfortable chair designed for gamers.",
        image: "https://images.pexels.com/photos/8185874/pexels-photo-8185874.jpeg"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        description: "Portable speaker with deep bass and clear sound.",
        image: "https://images.pexels.com/photos/373638/pexels-photo-373638.jpeg"
    },
    {
        name: "Jeans",
        price: 59.99,
        category: "Clothing",
        description: "Stylish denim jeans with a slim fit.",
        image: "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg"
    },
    {
        name: "Notebook",
        price: 9.99,
        category: "Stationery",
        description: "A handy notebook for notes and sketches.",
        image: "https://picsum.photos/seed/17/400/300"
    },
    {
        name: "Water Bottle",
        price: 12.99,
        category: "Fitness",
        description: "Leak-proof bottle to keep you hydrated.",
        image: "https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg"
    },
    {
        name: "Headphones Stand",
        price: 19.99,
        category: "Accessories",
        description: "Keep your headphones organized with this stand.",
        image: "https://picsum.photos/seed/19/400/300"
    },
    {
        name: "Desk Organizer",
        price: 17.99,
        category: "Home Decor",
        description: "Organize your workspace efficiently.",
        image: "https://picsum.photos/seed/20/400/300"
    },
    {
        name: "Leather Belt",
        price: 34.99,
        category: "Accessories",
        description: "Classic belt made from premium leather.",
        image: "https://picsum.photos/seed/21/400/300"
    },
    {
        name: "Action Camera",
        price: 149.99,
        category: "Electronics",
        description: "Record adventures in stunning 4K.",
        image: "https://picsum.photos/seed/22/400/300"
    },
    {
        name: "Wireless Earbuds",
        price: 49.99,
        category: "Electronics",
        description: "Compact earbuds with noise cancellation.",
        image: "https://picsum.photos/seed/23/400/300"
    },
    {
        name: "Office Chair",
        price: 129.99,
        category: "Furniture",
        description: "Ergonomic chair for comfort during work hours.",
        image: "https://picsum.photos/seed/24/400/300"
    },
    {
        name: "Throw Pillow",
        price: 22.99,
        category: "Home Decor",
        description: "Soft cushion to brighten your living space.",
        image: "https://picsum.photos/seed/25/400/300"
    },
    {
        name: "Running Shorts",
        price: 29.99,
        category: "Clothing",
        description: "Lightweight shorts for outdoor activities.",
        image: "https://picsum.photos/seed/26/400/300"
    },
    {
        name: "Digital Watch",
        price: 89.99,
        category: "Accessories",
        description: "A sleek watch with multiple functions.",
        image: "https://picsum.photos/seed/27/400/300"
    },
    {
        name: "Wall Art",
        price: 49.99,
        category: "Home Decor",
        description: "Decorative wall art for modern interiors.",
        image: "https://picsum.photos/seed/28/400/300"
    },
    {
        name: "Camping Tent",
        price: 199.99,
        category: "Outdoor",
        description: "Spacious tent for weekend getaways.",
        image: "https://picsum.photos/seed/29/400/300"
    },
    {
        name: "Gaming Console",
        price: 399.99,
        category: "Electronics",
        description: "Next-gen console for immersive gaming.",
        image: "https://picsum.photos/seed/30/400/300"
    },
    {
        name: "Bean Bag",
        price: 59.99,
        category: "Furniture",
        description: "Comfortable seating for relaxation.",
        image: "https://picsum.photos/seed/31/400/300"
    },
    {
        name: "Fitness Tracker",
        price: 79.99,
        category: "Electronics",
        description: "Track your health and workouts easily.",
        image: "https://picsum.photos/seed/32/400/300"
    },
    {
        name: "Notebook Stand",
        price: 19.99,
        category: "Stationery",
        description: "Keep your notebooks neatly stacked.",
        image: "https://picsum.photos/seed/33/400/300"
    },
    {
        name: "Winter Jacket",
        price: 129.99,
        category: "Clothing",
        description: "Stay warm with this stylish jacket.",
        image: "https://picsum.photos/seed/34/400/300"
    },
    {
        name: "Power Drill",
        price: 89.99,
        category: "Tools",
        description: "A powerful tool for home repairs.",
        image: "https://picsum.photos/seed/35/400/300"
    },
    {
        name: "Tablet",
        price: 299.99,
        category: "Electronics",
        description: "Portable tablet for work and entertainment.",
        image: "https://picsum.photos/seed/36/400/300"
    },
    {
        name: "Cooking Pan",
        price: 34.99,
        category: "Kitchen",
        description: "Non-stick pan perfect for everyday cooking.",
        image: "https://picsum.photos/seed/37/400/300"
    },
    {
        name: "Garden Tools Set",
        price: 49.99,
        category: "Outdoor",
        description: "Everything you need for your garden care.",
        image: "https://picsum.photos/seed/38/400/300"
    },
    {
        name: "Hiking Backpack",
        price: 79.99,
        category: "Outdoor",
        description: "Comfortable backpack for long hikes.",
        image: "https://picsum.photos/seed/39/400/300"
    },
    {
        name: "Wall Clock",
        price: 29.99,
        category: "Home Decor",
        description: "A modern clock to enhance your walls.",
        image: "https://picsum.photos/seed/40/400/300"
    },
    {
        name: "Office Desk",
        price: 199.99,
        category: "Furniture",
        description: "Spacious desk for your home office.",
        image: "https://picsum.photos/seed/41/400/300"
    },
    {
        name: "Bluetooth Tracker",
        price: 19.99,
        category: "Electronics",
        description: "Never lose your keys or wallet again.",
        image: "https://picsum.photos/seed/42/400/300"
    },
    {
        name: "Pet Bed",
        price: 39.99,
        category: "Pet Supplies",
        description: "Cozy bed for your furry friend.",
        image: "https://picsum.photos/seed/43/400/300"
    },
    {
        name: "Electric Kettle",
        price: 24.99,
        category: "Kitchen",
        description: "Fast boiling kettle with automatic shutoff.",
        image: "https://picsum.photos/seed/44/400/300"
    },
    {
        name: "Wireless Keyboard",
        price: 49.99,
        category: "Electronics",
        description: "Compact keyboard for productivity.",
        image: "https://picsum.photos/seed/45/400/300"
    },
    {
        name: "Fitness Ball",
        price: 29.99,
        category: "Fitness",
        description: "Stability ball for workouts and stretches.",
        image: "https://picsum.photos/seed/46/400/300"
    },
    {
        name: "Electric Toothbrush",
        price: 39.99,
        category: "Personal Care",
        description: "Smart toothbrush for oral hygiene.",
        image: "https://picsum.photos/seed/47/400/300"
    },
    {
        name: "Beach Towel",
        price: 19.99,
        category: "Outdoor",
        description: "Soft towel perfect for beach days.",
        image: "https://picsum.photos/seed/48/400/300"
    },
    {
        name: "Camping Stove",
        price: 89.99,
        category: "Outdoor",
        description: "Portable stove for camping meals.",
        image: "https://picsum.photos/seed/49/400/300"
    },
    {
        name: "Wireless Charger",
        price: 29.99,
        category: "Electronics",
        description: "Convenient way to charge your devices wirelessly.",
        image: "https://picsum.photos/seed/50/400/300"
    }
];

export default items;
