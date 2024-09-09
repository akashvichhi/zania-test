import { useCallback, useState } from "react";
import "./App.scss";
import ItemList from "./components/ItemList";
import Item from "./types/Item";

const initialData: Item[] = [
  { title: "First", id: 0, checked: false },
  { title: "Second", id: 1, checked: false },
  { title: "Third", id: 2, checked: false },
  { title: "Fourth", id: 3, checked: false },
];

function App() {
  const [items, setItems] = useState<Item[]>(initialData);
  const [movedItems, setMovedItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const onMoveRight = useCallback(() => {
    setMovedItems((prev) => [...prev, ...selectedItems]);
    setItems((prev) => prev.filter((item) => !selectedItems.includes(item)));
    setSelectedItems([]);
  }, [selectedItems]);

  const onMoveLeft = useCallback(() => {
    setItems((prev) => [...prev, ...selectedItems]);
    setMovedItems((prev) =>
      prev.filter((item) => !selectedItems.includes(item))
    );
    setSelectedItems([]);
  }, [selectedItems]);

  const onSelectItem = useCallback((item: Item) => {
    setSelectedItems((prev: Item[]) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      }
      return [...prev, item];
    });
  }, []);

  return (
    <div className="items-container">
      <ItemList
        items={items}
        selectedItems={selectedItems}
        onSelectItem={onSelectItem}
      />
      <div>
        <div className="nav">
          <button onClick={onMoveLeft}>&lt;</button>
          <button onClick={onMoveRight}>&gt;</button>
        </div>
      </div>
      <ItemList
        items={movedItems}
        selectedItems={selectedItems}
        onSelectItem={onSelectItem}
      />
    </div>
  );
}

export default App;
