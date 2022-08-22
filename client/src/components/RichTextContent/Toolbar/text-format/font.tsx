export const FontSelect = () => {
  return null;
};

export const FontSizeInput = () => {
  return (
    <span>
      <span className="relative">
        <input className="w-10 h-6 border border-gray-300 text-center text-sm" />
        <div className="font-size-dropdown">
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>11</button>
          <button>12</button>
          <button>14</button>
          <button>18</button>
          <button>24</button>
          <button>30</button>
          <button>36</button>
          <button>48</button>
          <button>60</button>
          <button>72</button>
          <button>96</button>
        </div>
      </span>
    </span>
  );
};
