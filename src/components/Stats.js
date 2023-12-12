export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start Adding Items 🚀 and make your travel easier</em>
        </p>
      );
    const itemsNum = items.length;
    const itemsPacked = items.filter((item) => item.packed).length;
    const percentagePacked = (itemsPacked / itemsNum) * 100;
    return (
      <footer className="stats">
        <em>
          {percentagePacked === 100
            ? "You're ready to move✈️"
            : `You have ${itemsNum} items on your list📃, you have already packed ${itemsPacked}📦 (${Math.round(
                percentagePacked
              )}%)`}
        </em>
      </footer>
    );
  }
  