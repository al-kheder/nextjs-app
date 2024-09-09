import React from 'react';
import Select from 'react-select';

function ItemSelect({
  data,
  onSelectItem,
}: {
  data: any[];
  onSelectItem: (item: any) => void;
}) {
  const options = data.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  return (
    <div>
      <Select options={options} onChange={onSelectItem} />
    </div>
  );
}

export { ItemSelect };
