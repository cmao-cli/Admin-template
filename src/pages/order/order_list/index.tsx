import * as React from 'react';
import { useState } from 'react';
import { getOrders } from 'src/api/admin';
import SearchBar from './components/search_bar';
import OrderTable from './components/order_tabel';
import useFetchHook from 'src/hooks/useFetchHook';

interface IOrderListProps {}

const OrderList:React.FunctionComponent<IOrderListProps> = () => {
  const [ formValues, setForm ] = useState({});
  const [ page, setPage ] = useState({ current: 1, limit: 10 });
  const { current, limit } = page;
  const params = {
    ...formValues,
    page: current,
    limit,
  };
  const handleSearch = (values:any) => {
    setForm(values);
    setPage({ current: 1, limit });
  };
  const [data, loading] = useFetchHook(getOrders, params, [], [formValues, page]);
  return (
    <div style={{margin: 20}}>
      <SearchBar
        onSearch={(values) => { handleSearch(values); }}
      />
      <div className={'common_table_wrap'}>
        <OrderTable
          onPageChange={(pageObj) => { setPage(pageObj); }}
          current={current}
          pageSize={limit}
          total={data.total}
          loading={loading}
          data={data.items}
        />
      </div>
    </div>
  );
};

export default OrderList;
