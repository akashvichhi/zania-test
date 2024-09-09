import ItemType from "../../types/Item";

interface ItemProps {
  item: ItemType;
  isSelected: boolean;
  onSelectItem: (item: ItemType) => void;
}

const Item = ({ item, isSelected, onSelectItem }: ItemProps) => {
  return (
    <div
      className={`${isSelected ? "selected" : ""} item`}
      key={item.id}
      onClick={() => onSelectItem(item)}
    >
      {item.title}
    </div>
  );
};

export default Item;
