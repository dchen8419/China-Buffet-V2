import React from 'react';
import Card from './Card/Card';
import './Menu.css';

function Menu() {
    return (
        <div className='menu-background'>
            <div className='menu-container'>
                <h1>Menu</h1>
            </div>
            <div>
                <div>
                    <ul className='menu-ul-list'>
                        <div className='menu-container'>
                            <div className='menu-container-item menu-container-lunch'>
                                <Card 
                                    label='Lunch Special' extras="Served with Egg Roll & Pork Fried Rice" time='(11:00am to 4:00pm)' item={
                                        [
                                            {
                                                id: 'L1',
                                                Name: 'Chicken Wings',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L2',
                                                Name: 'Spare Ribs',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L3',
                                                Name: 'Beef or Chicken with Broccoli',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L4',
                                                Name: 'Sweet & Sour Chicken',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L5',
                                                Name: 'Lo Mein (Chicken, Pork, or Beef)',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L6',
                                                Name: 'Pepper Steak with Onion',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L7',
                                                Name: 'Szechuan Chicken or Beef',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L8',
                                                Name: 'Kung Po Chicken',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L9',
                                                Name: 'Genertal Tso\'s Chicken',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L10',
                                                Name: 'Chicken with Garlic Sauce',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L11',
                                                Name: 'Curry Chicken or Beef',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L12',
                                                Name: 'Chicken, Pork or Beef with Mixed Vegetables',
                                                Price: '$7.75'
                                            },
                                            {
                                                id: 'L13',
                                                Name: 'Sesame Chicken',
                                                Price: '$7.75'
                                            },
                                        ]
                                    }
                                />
                            </div>
                        </div>
                    </ul>
                    <ul className='menu-ul-list'>
                        <div className='menu-container'>
                            <div className='menu-container-item menu-container-item-1'>
                                <Card 
                                    label="Appetizers" item={
                                [
                                    {
                                        id: 1,
                                        Name: 'Shrimp Egg Roll',
                                        Price: '$1.75'
                                    },
                                    {
                                        id: 2,
                                        Name: 'Chicken Egg Roll (2)',
                                        Price: '$2.50'
                                    },
                                    {
                                        id: 3,
                                        Name: 'Vegetable Spring Roll (2)',
                                        Price: '$2.50'
                                    },
                                    {
                                        id: 4,
                                        Name: 'Crab rangoon (12)',
                                        Price: '$6.50'
                                    },
                                    {
                                        id: 5,
                                        Name: 'Steamed or Fried Dumpling (8)',
                                        Price: '$6.00'
                                    },
                                    {
                                        id: 6,
                                        Name: 'B.B.Q. Spare Ribs Sm.(5) Lg.(10)',
                                        Small: '$6.00',
                                        Large: '10.95'
                                    },
                                    {
                                        id: 7,
                                        Name: 'Chicken Wings Sm.(6) Lg.(12)',
                                        Small: '$4.50',
                                        Large:  '$9.00'
                                    },
                                    {
                                        id: 8,
                                        Name: 'Hot Wings Sm.(7) Lg.(14)',
                                        Small: '$4.50',
                                        Lage: '$9.50'
                                    },
                                    {
                                        id: 9,
                                        Name: 'Chicken Teriyaki (7)',
                                        Price: '6.95'
                                    },
                                    {
                                        id: 10,
                                        Name: 'Pu Pu Platter (for 2)',
                                        Price: '$10.95'
                                    },
                                    {
                                        id: 11,
                                        Name: 'Sweet Potato',
                                        Small: '$5.50',
                                        Large: '$7.99'
                                    },
                                    {
                                        id: 12,
                                        Name: 'Potato',
                                        Small: '$5.00',
                                        Large: '$7.99'
                                    },
                                    {
                                        id: 13,
                                        Name: 'Chicken Nuggets (12)',
                                        Price: '4.49'
                                    },
                                    {
                                        id: 14,
                                        Name: 'Sweet Rolls',
                                        Price: '$4.25'
                                    },
                                    {
                                        id: 16,
                                        Name: 'Cheese Sticks (12)',
                                        Price: '6.49'
                                    },
                                    {
                                        id: 18,
                                        Name: 'French Fries',
                                        Small: '$2.75',
                                        Large: '$3.75'
                                    },
                                    {
                                        id: 19,
                                        Name: 'Fried Okra',
                                        Price: '$4.49'
                                    },
                                ]
                                    }
                                />
                            </div>
                            <div className='menu-container-item menu-container-item-2'>
                                <Card 
                                    label="Soup" extras ="(with Crunchy Noodles)" item={
                                [
                                    {
                                        id: 20,
                                        Name: 'Wonton Soup',
                                        Small: '$2.50',
                                        Large: '$4.50'
                                    },
                                    {
                                        id: 21,
                                        Name: 'Egg Drop Soup',
                                        Small: '$2.50',
                                        Large: '$4.50'
                                    },
                                    {
                                        id: 22,
                                        Name: 'Wonton and Egg Drop Soup',
                                        Small: '$2.50',
                                        Large: '$4.50'
                                    },
                                    {
                                        id: 23,
                                        Name: 'Hot & Sour Soup',
                                        Small: '$2.50',
                                        Large: '$4.50'
                                    },
                                    {
                                        id: 24,
                                        Name: 'Chicken Noodle or Rice Soup',
                                        Small: '$2.50',
                                        Large: '$4.50'
                                    },
                                    {
                                        id: 25,
                                        Name: 'House Special Soup',
                                        Price: '$5.00'
                                    },
                                    {
                                        id: 26,
                                        Name: 'Chinese Vegetable Soup',
                                        Price: '$3.50',
                                    },
                                ]
                                    }
                                />
                            </div>
                        </div>
                    </ul>
                    <ul className='menu-ul-list'>
                        <div className='menu-container'>
                            <div className='menu-container-item menu-container-item-1'>
                                <Card 
                                    label="Lo Mein" item={
                                [
                                    {
                                        id: 27,
                                        Name: 'Vegetable Lo Mein',
                                        Small: '$5.00',
                                        Large: '$8.25'
                                    },
                                    {
                                        id: 28,
                                        Name: 'Roast Pork Lo Mein',
                                        Small: '$5.00',
                                        Large: '$8.25'
                                    },
                                    {
                                        id: 29,
                                        Name: 'Chicken Lo Mein',
                                        Small: '$5.00',
                                        Large: '$8.25'
                                    },
                                    {
                                        id: 30,
                                        Name: 'Beef Lo Mein',
                                        Small: '$5.50',
                                        Large: '$9.25'
                                    },
                                    {
                                        id: 31,
                                        Name: 'Shrimp Lo Mein',
                                        Small: '$5.50',
                                        Large: '$9.25'
                                    },
                                    {
                                        id: 32,
                                        Name: 'House Special Lo Mein',
                                        Small: '$5.50',
                                        Large: '$9.25'
                                    },
                                ]
                                    }
                                />
                            </div>
                            <div className='menu-container-item menu-container-item-2'>
                                <Card 
                                    label="Fried Rice" item={
                                [
                                    {
                                        id: 33,
                                        Name: 'Ham Fried Rice',
                                        Small: '$5.00',
                                        Large: '8.25'
                                    },
                                    {
                                        id: 34,
                                        Name: 'Roast Pork Fried Rice',
                                        Small: '$5.00',
                                        Large: '8.25'
                                    },
                                    {
                                        id: 35,
                                        Name: 'Chicken Fried Rice',
                                        Small: '$5.00',
                                        Large: '8.25'
                                    },
                                    {
                                        id: 36,
                                        Name: 'Beef Fried Rice',
                                        Small: '$5.50',
                                        Large: '9.25'
                                    },
                                    {
                                        id: 37,
                                        Name: 'Vegetable Fried Rice',
                                        Small: '$5.00',
                                        Large: '8.25'
                                    },
                                    {
                                        id: 38,
                                        Name: 'Shrimp Fried Rice',
                                        Small: '$5.50',
                                        Large: '9.25'
                                    },
                                    {
                                        id: 39,
                                        Name: 'House Special Fried Rice',
                                        Small: '$5.50',
                                        Large: '9.25'
                                    },
                                ]
                                    }
                                />
                            </div>
                        </div>
                        </ul>
                        <ul className='menu-ul-list'>
                            <div className='menu-container'>
                                <div className='menu-container-item menu-container-chef-special'>
                                    <Card 
                                        label="Chef Special" extras="(w. White Rice)" item={
                                    [
                                        {
                                            id: 'C1',
                                            Name: "General Tso's Chicken", 
                                            Description: "Chunks of tender chicken marinated in a hot and spicy red sauce.",
                                            Price: '$9.95'
                                        },
                                        {
                                            id: 'C2',
                                            Name: "Sesame Chicken",
                                            Description: "Chunks of tender chicken marinated in a sweet sauce with sesame seeds.",
                                            Price: '$9.95'
                                        },
                                        {
                                            id: 'C3',
                                            Name: "Happy Family",
                                            Description: "Shrimp, scallops, chicken and ceef sauteed in a brown sauce.",
                                            Price: '$12.50'
                                        },
                                        {
                                            id: "C4",
                                            Name: "Triple Delight",
                                            Description: "Shrimp, scallops and chicken sauteed in a spicy garlic sauce.",
                                            Price: '$13.99'
                                        },
                                        {
                                            id: "C5",
                                            Name: "Mongolian Beef",
                                            Description: "Sliced Beef with onions in a spicy brown sauce.",
                                            Price: '$10.95'
                                        },
                                        {
                                            id: "C6",
                                            Name: "Beef with Scallops",
                                            Description: "Sliced Beef and Sea Scallops sauteed in a brown sauce with mixed vegetables.",
                                            Price: '$13.99'
                                        },
                                        {
                                            id: "C7",
                                            Name: "Seafood Delight",
                                            Description: "Jumbo shrimp, scallops and crab meat with mixed Chinese vegetables.",
                                            Price: '$13.99'
                                        },
                                        {
                                            id: "C8",
                                            Name: "Bonless Chicken",
                                            Description: "Sliced bonless fried chicken topped with mixed vegetables in a brown sauce.",
                                            Price: '$9.95'
                                        },
                                        {
                                            id: "C9",
                                            Name: "Lemon Chicken",
                                            Description: "Sliced boneless fried chickeen topped with lemon flavored sauce.",
                                            Price: '$9.95'
                                        },
                                        {
                                            id: "C10",
                                            Name: "Hunan Combo",
                                            Description: "Diced Chicken and baby shrimp sauteed in a spicy Hunan suace.",
                                            Price: '$11.95'
                                        },
                                        {
                                            id: "C11",
                                            Name: "Sweet and Sour Delight",
                                            Description: "Combination of fried chicken, shrimp and pork with sweet and sour sauce",
                                            Price: '$10.50'
                                        }
                                    ]
                                        }
                                    />
                                </div>
                            </div>
                        </ul>
                        <ul className='menu-ul-list'>
                            <div className='menu-container'>
                                <div className='menu-container-item menu-container-item-1'>
                                    <Card 
                                        label="Egg Foo Young" extras="(with White Rice)" item={
                                [
                                    {
                                        id: 40,
                                        Name: ' Roast Pork Egg Foo Young',
                                        Price: '$8.75'
                                    },
                                    {
                                        id: 41,
                                        Name: 'Chicken Egg Foo Young',
                                        Price: '$8.75'
                                    },
                                    {
                                        id: 42,
                                        Name: 'Beef Egg Foo Young',
                                        Price: '$8.75'
                                    },
                                    {
                                        id: 43,
                                        Name: 'Vegetable Foo Young',
                                        Price: '$8.75'
                                    },
                                    {
                                        id: 44,
                                        Name: 'Shrimp Egg Foo Young',
                                        Price: '$9.50'
                                    },
                                ]
                                        }
                                    />
                                </div>
                                <div className='menu-container-item menu-container-item-2'>
                                    <Card 
                                        label="Chow Mein / Chop Suey" extras='(w. Crunchy Noodles and White Rice)' item={
                                [
                                    {
                                        id: 45,
                                        Name: 'Roast Pork Chow Mein or Chop Suey',
                                        Small: '$5.50',
                                        Large: '$9.25'
                                    },
                                    {
                                        id: 46,
                                        Name: 'Chicken Chow Mein or Chop Suey',
                                        Small: '$5.50',
                                        Large: '$9.25'
                                    },
                                    {
                                        id: 47,
                                        Name: 'Beef Chow Mein or Chop Suey',
                                        Small: '$5.50',
                                        Large: '$9.25'
                                    },
                                    {
                                        id: 48,
                                        Name: 'Shrimp Chow Mein or Chop Suey',
                                        Small: '$5.75',
                                        Large: '$10.75'
                                    },
                                    {
                                        id: 49,
                                        Name: 'House Special Chow Mein or Chop Suey',
                                        Small: '$5.75',
                                        Large: '$10.75'
                                    },
                                ]
                                        }
                                    />
                                </div>
                            </div>
                        </ul>
                        <ul className='menu-ul-list'>
                            <div className='menu-container'>
                                <div className='menu-container-item menu-container-item-1'>
                                    <Card
                                        label="Pork" extras="(with White Rice)" item={
                                            [
                                                {
                                                    id: 50,
                                                    Name: 'Roast Pork with Mixed Vegetables',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 51,
                                                    Name: 'Roast Pork with Broccoli',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 52,
                                                    Name: 'Roast Pork with Mushroom',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 53,
                                                    Name: 'Twice Cooked Roast Pork',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                            ]
                                        }
                                    />
                                </div>
                                <div className='menu-container-item menu-container-item-2'>
                                    <Card 
                                        label="Chicken" extras="(with White Rice)" item={
                                            [
                                                {
                                                    id: 54,
                                                    Name: 'Curry Chicken',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 55,
                                                    Name: 'Chicken with Broccoli',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 56,
                                                    Name: 'Chicken with Mixed Vegetables',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 57,
                                                    Name: 'Cachew Chicken',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 58,
                                                    Name: 'Kung Po Chicken',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 59,
                                                    Name: 'Chickenwith Garlic Sauce',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 60,
                                                    Name: 'Szechuan Chicken',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 61,
                                                    Name: 'Meat Ball (12)',
                                                    Price: '$6.50'
                                                },
                                                {
                                                    id: 62,
                                                    Name: 'Hawaii Chicken',
                                                    Price: '$9.25'
                                                },
                                                {
                                                    id: 63,
                                                    Name: 'Moo Goo Gai Pan',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 64,
                                                    Name: 'Chicken with Mushroom',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                                {
                                                    id: 65,
                                                    Name: 'Chicken Black Pepper Sauce',
                                                    Small: '$5.50',
                                                    Large: '$9.95'
                                                },
                                            ]
                                        }
                                    />
                                </div>
                                <div className='menu-container-item menu-container-item-3'>
                                    <Card 
                                        label="Beef" extras="(with White Rice)" item={
                                    [
                                        {
                                            id: 66,
                                            Name: 'Beef with Broccoli',
                                            Small: '$6.00',
                                            Large: '$9.75'
                                        },
                                        {
                                            id: 67,
                                            Name: 'Beef with Mixed Vegetables',
                                            Small: '$6.00',
                                            Large: '$9.75'
                                        },
                                        {
                                            id: 68,
                                            Name: 'Beef',
                                            Small: '$6.00',
                                            Large: '$9.75'
                                        },
                                        {
                                            id: 69,
                                            Name: 'Beef with Mushroom',
                                            Small: '$6.00',
                                            Large: '$9.75'
                                        },
                                        {
                                            id: 70,
                                            Name: 'Pepper Steak with Onion',
                                            Small: '$6.00',
                                            Large: '$9.75'
                                        },
                                        {
                                            id: 71,
                                            Name: 'Kung Po Beef',
                                            Small: '$6.00',
                                            Large: '$9.75'
                                        },
                                        {
                                            id: 72,
                                            Name: 'Beef with Garlic Sauce',
                                            Small: '$6.00',
                                            Large: '$9.75'
                                        },
                                        {
                                            id: 73,
                                            Name: 'Beef Hunan Beef',
                                            Small: '$6.00',
                                            Large: '$9.75'
                                        },
                                    ]
                                        }
                                    />
                                </div>
                                <div className='menu-container-item menu-container-item-4'>
                                    <Card 
                                        label="Seafood" extras="(with White Rice)" item={
                                            [
                                                {
                                                    id: 76,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 77,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 78,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 79,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 80,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 81,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 82,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 83,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 84,
                                                    Name: 'Shrimp',
                                                    Small: '$6.75',
                                                    Large: '$11.49'
                                                },
                                                {
                                                    id: 85,
                                                    Name: 'Salt & Pepper Shrimp',
                                                    Small: '$7.75',
                                                    Large: '$13.49'
                                                },
                                                {
                                                    id: 86,
                                                    Name: 'Crab Legs',
                                                    Price: '$13.49'
                                                },
                                                {
                                                    id: 87,
                                                    Name: 'Mussels (12)',
                                                    Price: '$8.00'
                                                },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </ul>
                        <ul className='menu-ul-list'>
                            <div className='menu-container'>
                                <div className='menu-container-item menu-container-item-1'>
                                    <Card 
                                        label="Sweet & Sour" extras="(with White Rice)" item={
                                            [
                                                {
                                                    id: 74,
                                                    Name: 'Sweet & Sour Chicken',
                                                    Small: '$5.50',
                                                    Large: '$9.25'
                                                },
                                                {
                                                    id: 75,
                                                    Name: 'Sweet & Sour Shrimp',
                                                    Small: '$6.25',
                                                    Large: '$11.50'
                                                },
                                            ]
                                        }
                                    />
                                </div>
                                <div className='menu-container-item menu-container-item-2'>
                                    <Card 
                                        label="Vegetable" extras="(with White Rice)" item={
                                            [
                                                {
                                                    id: 88,
                                                    Name: 'Sauteed Mixed Vegetables',
                                                    Small: '$5.00',
                                                    Large: '$8.50'
                                                },
                                                {
                                                    id: 89,
                                                    Name: 'Mixed Vegetables with Garlic Sauce',
                                                    Small: '$5.00',
                                                    Large: '$8.50'
                                                },
                                                {
                                                    id: 90,
                                                    Name: 'Broccoli with Garlic Sauce',
                                                    Small: '$5.00',
                                                    Large: '$8.50'
                                                },
                                                {
                                                    id: 91,
                                                    Name: 'Cabbage w. Ham',
                                                    Small: '$5.00',
                                                    Large: '$8.50'
                                                },
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </ul>
                            <ul className='menu-ul-list'>
                                <div className='menu-container'>
                                    <div className='menu-container-item menu-container-dinner-combo'>
                                    <Card 
                                        label="Dinner Combination Platters" extras="Served with Egg Roll & Pork Freid Rice"   item={
                                            [
                                                {
                                                    id: 'D1',
                                                    Name: 'Chicken Wings with Shrimp Fried Rice',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D2',
                                                    Name: 'B.B.Q. Spare Ribs',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D3',
                                                    Name: 'Chicken with Broccoli',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D4',
                                                    Name: 'Beef with Broccoli',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D5',
                                                    Name: 'Pepper Steak with Onions',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D6',
                                                    Name: 'Chow Mein (Chicken, Beef, or Pork)',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D7',
                                                    Name: 'Sweet & Sour (Chicken or Pork',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D8',
                                                    Name: "Szechuan Beef or Chicken",
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D9',
                                                    Name: "Shrimp with Garlic Sauce",
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D10',
                                                    Name: "Sesame Chicken",
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D11',
                                                    Name: 'General Tso\'s Chicken',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D12',
                                                    Name: 'Kung Po Chicken or Shrimp',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D13',
                                                    Name: 'Chicken, Pork or Beef with Mixed Vegetables',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D14',
                                                    Name: 'Lo Mein (Chicken, Beef, Pork or Shrimp',
                                                    Price: '$9.50'
                                                },
                                                {
                                                    id: 'D15',
                                                    Name: 'Moo Goo Gai Pan',
                                                    Price: '$9.50'
                                                },
                                            ]
                                        }
                                    />
                                    </div>
                                </div>
                            </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu