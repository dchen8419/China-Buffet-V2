import React from 'react'
import Card from './Card/Card'
import Chef from './CSpecial/Chef'
import Dinner from './DSpecial/Dinner'
import Lunch from './Lunch/Lunch'

function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <div>
                <div>
                    <ul>
                        <Card 
                            label="Appetizers" item={
                                [
                                    'Shrimp Egg Roll', 
                                    'Chicken Egg Roll (2)',
                                    'Vegetable Spring Roll (2)',
                                    'Crab Rangoon (12)',
                                    'Steamed or Fried Drumpling (8)',
                                    'B.B.Q. Spare Ribs',
                                    'Chicken Wings',
                                    'Hot Chicken Wing',
                                    'Chicken Teriyaki',
                                    'Pu Pu Platter',
                                    'Sweet Potato',
                                    'Potato',
                                    'Chicken Nugget (12)',
                                    'Sweet Rolls',
                                    'Cheese Sticks',
                                    'French Fries',
                                    'Fried Okra'
                                ]
                            }
                        />
                        <Card 
                            label="Soup" item={
                                [
                                    'Wonton Soup',
                                    'Egg Drop Soup',
                                    'Wonton and Egg Drop Soup',
                                    'Hot & Sour Soup',
                                    'Chicken Noodle or Rice Soup',
                                    'House Special Soup',
                                    'Chinese Vegetable Soup'
                                ]
                            }
                        />
                    </ul>
                    <ul>
                        <Card 
                            label="Lo Mein" item={
                                [
                                    'Vegetable Lo Mein',
                                    'Roast Pork Lo Mein',
                                    'Chicken Lo Mein',
                                    'Beef Lo Mein',
                                    'Shrimp Lo Mein',
                                    'House Special Lo Mein'
                                ]
                            }
                        />
                        <Card 
                            label="Fried Rice" item={
                                [
                                    'Ham Fried Rice',
                                    'Roast Pork Fried Rice',
                                    'Chicken Fried Rice',
                                    'Beef Fried Rice',
                                    'Vegetable Fried Rice',
                                    'Shrimp Fried Rice',
                                    'House Special Fried Rice'
                                ]
                            }
                        />
                        </ul>
                        <ul>
                            <Chef 
                                item={
                                    [
                                        {
                                            id: 1,
                                            MenuNumber: "C1", 
                                            Name: "General Tso's Chicken", 
                                            Description: "Chunks of tender chicken marinated in a hot and spicy red sauce."
                                        },
                                        {
                                            id: 2,
                                            MenuNumber: "C2",
                                            Name: "Sesame Chicken",
                                            Description: "Chunks of tender chicken marinated in a sweet sauce with sesame seeds.",
                                        },
                                        {
                                            id: 3,
                                            MenuNumber: "C3",
                                            Name: "Happy Family",
                                            Description: "Shrimp, scallops, chicken and ceef sauteed in a brown sauce.",
                                        },
                                        {
                                            id: 4,
                                            MenuNumber: "C4",
                                            Name: "Triple Delight",
                                            Description: "Shrimp, scallops and chicken sauteed in a spicy garlic sauce.",
                                        },
                                        {
                                            id: 5,
                                            MenuNumber: "C5",
                                            Name: "Mongolian Beef",
                                            Description: "Sliced Beef with onions in a spicy brown sauce.",
                                        },
                                        {
                                            id: 6,
                                            MenuNumber: "C6",
                                            Name: "Beef with Scallops",
                                            Description: "Slice beef and sea scallops sauteed in a brown sauce with mixed vegetables.",
                                        },
                                        {
                                            id: 7,
                                            MenuNumber: "C7",
                                            Name: "Seafood Delight",
                                            Description: "Jumbo shrimp, scallops and crab meat with mixed Chinese vegetables.",
                                        },
                                        {
                                            id: 8,
                                            MenuNumber: "C8",
                                            Name: "Bonless Chicken",
                                            Description: "Sliced bonless fried chicken topped with mixed vegetables in a brown sauce.",
                                        },
                                        {
                                            id: 9,
                                            MenuNumber: "C9",
                                            Name: "Lemon Chicken",
                                            Description: "Sliced boneless fried chickeen topped with lemon flavored sauce.",
                                        },
                                        {
                                            id: 10,
                                            MenuNumber: "C10",
                                            Name: "Hunan Combo",
                                            Description: "Diced Chicken and baby shrimp sauteed in a spicy Hunan suace.",
                                        },
                                        {
                                            id: 11,
                                            MenuNumber: "C11",
                                            Name: "Sweet and Sour Delight",
                                            Description: "Combination of fried chicken, shrimp and pork with sweet and sour sauce",
                                        }
                                    ]
                                }
                            />
                        </ul>
                        <ul>
                        <Card 
                            label="Egg Foo Young" item={
                                [
                                    'Roast Pork Egg Foo Roung',
                                    'Chicken Egg Foo Young',
                                    'Beef Egg Foo Young',
                                    'Vegetable Egg Foo Young',
                                    'Shrimp Egg Foo Young'
                                ]
                            }
                        />
                        <Card 
                            label="Chow Mein / Chop Suey" item={
                                [
                                    'Roast Pork Chow Mein or Chop Suey',
                                    'Chicken Chow Mein or Chop Suey',
                                    'Beef Chow Mein or Chop Suey',
                                    'Shrimp Chow Mein or Chop Suey',
                                    'House Special Chow Mein or Chop Suey'
                                ]
                            }
                        />
                        </ul>
                        <ul>
                            <Card
                                label="Pork" item={
                                    [
                                        'Roast Pork with Mixed Vegetables',
                                        'Roast Pork with Broccoli',
                                        'Roast Pork with Mushroom',
                                        "Twice Cooked Roast Pork"
                                    ]
                                }
                            />
                            <Card 
                                label="Chicken" item={
                                    [
                                        'Curry Chicken',
                                        'Chicken with Broccoli',
                                        'Chicken with Mixed Vegetables',
                                        'Cashew Chicken',
                                        'Kung Po Chicken',
                                        'Chicken with Garlic Sauce',
                                        'Szechuan Chicken',
                                        'Meat Ball (12)',
                                        'Hawaii Chicken',
                                        'Moo Goo Gai Pan',
                                        'Chicken with Mushroom',
                                        'Chicken Black Pepper Sauce'
                                    ]
                                }
                            />
                            <Card 
                                label="Beef" item={
                                    [
                                        'Beef with Broccoli',
                                        'Beef with Mixed Vegetables',
                                        'Beef with Mushroom',
                                        'Pepper Steak with Onion',
                                        'Kung Po Beef',
                                        'Szechuan Beef',
                                        'Beef with Garlic Sauce',
                                        'Hunan Beef'
                                    ]
                                }
                            />
                            <Card 
                                label="Seafood" item={
                                    [
                                        'Shrimp with Broccoli',
                                        'Shrmip with Lobster Sauce',
                                        'Shrimp with Mixed Vegetables',
                                        'Shrimp with Garlic Sauce',
                                        'Shrimp with Chili Sauce',
                                        'Scallop with Garlic Sauce',
                                        'Kung Po Shrimp',
                                        'Kung Po Scallop',
                                        'Curry Shrimp',
                                        'Salt & Pepper Shrimp',
                                        'Crab Legs',
                                        'Mussels (12)'
                                    ]
                                }
                            />
                        </ul>
                            
                        <ul>
                            <Card 
                                label="Sweet & Sour" item={
                                    [
                                        'Sweet & Sour Chicken',
                                        'Sweet & Sour Shrimp'
                                    ]
                                }
                            />
                            <Card 
                                label="Vegetable" item={
                                    [
                                        'Sauteed Mixed Vegetables',
                                        'Mixed Vegetables with Garlic Sauce',
                                        'Broccoli with Garlic Sauce',
                                        'Cabbage w. Ham'
                                    ]
                                }
                            />
                        </ul>
                            <ul>
                                <Dinner 
                                    item={
                                        [
                                            {
                                                id: 12,
                                                DinnerNumber: 'D1',
                                                DinnerCombo: 'Chicken Wings with Shrimp Fried Rice'
                                            },
                                            {
                                                id: 13,
                                                DinnerNumber: 'D2',
                                                DinnerCombo: 'B.B.Q. Spare Ribs'
                                            },
                                            {
                                                id: 14,
                                                DinnerNumber: 'D3',
                                                DinnerCombo: 'Chicken with Broccoli'
                                            },
                                            {
                                                id: 15,
                                                DinnerNumber: 'D4',
                                                DinnerCombo: 'Beef with Broccoli'
                                            },
                                            {
                                                id: 16,
                                                DinnerNumber: 'D5',
                                                DinnerCombo: 'Pepper Steak with Onions'
                                            },
                                            {
                                                id: 17,
                                                DinnerNumber: 'D6',
                                                DinnerCombo: 'Chow Mein (Chicken, Beef, or Pork)',
                                            },
                                            {
                                                id: 18,
                                                DinnerNumber: 'D7',
                                                DinnerCombo: 'Sweet & Sour (Chicken or Pork',
                                            },
                                            {
                                                id: 19,
                                                DinnerNumber: 'D8',
                                                DinnerCombo: "Szechuan Beef or Chicken",
                                            },
                                            {
                                                id: 20,
                                                DinnerNumber: 'D9',
                                                DinnerCombo: "Shrimp with Garlic Sauce",
                                            },
                                            {
                                                id: 21,
                                                DinnerNumber: 'D10',
                                                DinnerCombo: "Sesame Chicken",
                                            },
                                            {
                                                id: 22,
                                                DinnerNumber: 'D11',
                                                DinnerCombo: 'General Tso\'s Chicken',
                                            },
                                            {
                                                id: 23,
                                                DinnerNumber: 'D12',
                                                DinnerCombo: 'Kung Po Chicken or Shrimp',
                                            },
                                            {
                                                id: 24,
                                                DinnerNumber: 'D13',
                                                DinnerCombo: 'Chicken, Pork or Beef with Mixed Vegetables',
                                            },
                                            {
                                                id: 25,
                                                DinnerNumber: 'D14',
                                                DinnerCombo: 'Lo Mein (Chicken, Beef, Pork or Shrimp',
                                            },
                                            {
                                                id: 26,
                                                DinnerNumber: 'D15',
                                                DinnerCombo: 'Moo Goo Gai Pan',
                                            },
                                        ]
                                    }
                                
                                />
                            </ul>
                            <ul>
                                <Lunch 
                                    item={
                                        [
                                            {
                                                id: 27,
                                                LunchNumber: 'L1',
                                                LunchCombo: 'Chicken Wings'
                                            },
                                            {
                                                id: 28,
                                                LunchNumber: 'L2',
                                                LunchCombo: 'Spare Ribs'
                                            },
                                            {
                                                id: 29,
                                                LunchNumber: 'L3',
                                                LunchCombo: 'Beef or Chicken with Broccoli'
                                            },
                                            {
                                                id: 30,
                                                LunchNumber: 'L4',
                                                LunchCombo: 'Sweet & Sour Chicken'
                                            },
                                            {
                                                id: 31,
                                                LunchNumber: 'L5',
                                                LunchCombo: 'Lo Mein (Chicken, Pork, or Beef)'
                                            },
                                            {
                                                id: 32,
                                                LunchNumber: 'L6',
                                                LunchCombo: 'Pepper Steak with Onion'
                                            },
                                            {
                                                id: 33,
                                                LunchNumber: 'L7',
                                                LunchCombo: 'Szechuan Chicken or Beef'
                                            },
                                            {
                                                id: 34,
                                                LunchNumber: 'L8',
                                                LunchCombo: 'Kung Po Chicken'
                                            },
                                            {
                                                id: 35,
                                                LunchNumber: 'L9',
                                                LunchCombo: 'Genertal Tso\'s Chicken'
                                            },
                                            {
                                                id: 36,
                                                LunchNumber: 'L10',
                                                LunchCombo: 'Chicken with Garlic Sauce'
                                            },
                                            {
                                                id: 37,
                                                LunchNumber: 'L11',
                                                LunchCombo: 'Curry Chicken or Beef'
                                            },
                                            {
                                                id: 38,
                                                LunchNumber: 'L12',
                                                LunchCombo: 'Chicken, Pork or Beef with Mixed Vegetables'
                                            },
                                            {
                                                id: 39,
                                                LunchNumber: 'L13',
                                                LunchCombo: 'Sesame Chicken'
                                            },
                                        ]
                                    }
                                />
                            </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu