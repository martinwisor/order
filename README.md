Task: Create a React app like this example where a user can add food to their order. Use Context to give various components access to the order array and the functions that facilitate the order array.

Build Specifications:
Components:
Header
MenuList
MenuItem
Sidebar
Create an interface called Item which consists of:
id: string
name: string
description: string
calories: number
price: number
vegetarian: boolean
The App component will contain the Header, MenuList, and the Sidebar components.
The MenuList component will contain an array of menu items (see below).
The MenuList will contain the MenuItem component. Use the map method to produce as many MenuItem components as there are items in the menu.
Make a context folder that contains:
OrderContext.ts
OrderContextProvider.tsx
OrderContext.ts creates context.
Hint: Model your context by implementing an interface with these properties.
order: Item[];
addItem: (item: Item) => void;
removeItem: (id: string) => void;
OrderContextProvider.tsx should provide context to all its children. This is where the order state and the functions to update the state will live.
Don't forget to add OrderContextProvider to your index.tsx!
The useContext hook should be used in the Header, MenuList, and Sidebar components.
