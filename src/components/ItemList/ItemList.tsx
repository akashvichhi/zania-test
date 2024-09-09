import ItemType from "../../types/Item";
import Item from "../Item/Item";
import "./ItemList.scss";

interface ItemListProps {
  items: ItemType[];
  selectedItems: ItemType[];
  onSelectItem: (item: ItemType) => void;
}

const ItemList = ({ items, selectedItems, onSelectItem }: ItemListProps) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          isSelected={selectedItems.includes(item)}
          onSelectItem={onSelectItem}
          item={item}
        />
      ))}
    </div>
  );
};

export default ItemList;
