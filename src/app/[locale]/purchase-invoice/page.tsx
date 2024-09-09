import Invoce from './Invoice';

export interface Item {
  id: string;
  name: string;
  nameAr: string;
}

export default async function PurchaseInvoce() {
  const menuReq = await fetch('http://localhost:3000/api/items', {
    cache: 'force-cache',
  });

  const menu = await menuReq.json();

  const itemList = menu.data
    .filter((item: any) => !item.isGroupedItem)
    .map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        nameAr: item.nameAr,
      };
    });
  console.log(itemList);
  return (
    <div className="p-5 flex justify-start">
      <Invoce itemList={itemList}/>
    </div>
  );
}
