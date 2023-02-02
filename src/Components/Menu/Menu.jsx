import React from 'react'
import Card from './Card/Card'
import Chef from './CSpecial/Chef'

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
                                        {C1: "General Tso's Chicken"},
                                        {D1: "Chunks of tender chicken marinated in a hot and spicy red sauce."},
                                        {C2: "Sesame Chicken"},
                                        {D2: "Chunks of tender chicken marinated in a sweet sauce with sesame seeds."},
                                        {C3: "Happy Family"},
                                        {D3: "Shrimp, scallops, chicken and ceef sauteed in a brown sauce."},
                                        {C4: "Triple Delight"},
                                        {D4: "Shrimp, scallops and chicken sauteed in a spicy garlic sauce."},
                                        {C5: "Mongolian Beef"},
                                        {D5: "Sliced Beef with onions in a spicy brown sauce."},
                                        {C6: "Beef with Scallops"},
                                        {D6: "Slice beef and sea scallops sauteed in a brown sauce with mixed vegetables."},
                                        {C7: "Seafood Delight"},
                                        {D7: "Jumbo shrimp, scallops and crab meat with mixed Chinese vegetables."},
                                        {C8: "Bonless Chicken"},
                                        {D8: "Sliced bonless fried chicken topped with mixed vegetables in a brown sauce."},
                                        {C9: "Lemon Chicken"},
                                        {D9: "Sliced boneless fried chickeen topped with lemon flavored sauce."},
                                        {C10: "Hunan Combo"},
                                        {D10: "Diced Chicken and baby shrimp sauteed in a spicy Hunan suace."},
                                        {C11: "Sweet and Sour Delight"},
                                        {D11: "Combination of fried chicken, shrimp and pork with sweet and sour sauce"}
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
                </div>
            </div>
        </div>
    )
}

export default Menu