import { useDrag } from "react-dnd";
import ItemType from "../../types/Item";

interface ItemProps {
  item: ItemType;
  isSelected: boolean;
  onSelectItem: (item: Item) => void;
}

const Item = ({ item, isSelected, onSelectItem }: ItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name },
    end: (result, monitor) => {
      const dropResult = monitor.getDropResult<ItemType>();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

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
