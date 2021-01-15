import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';

class App extends React.Component {

  render() {
    return (
      <div>
        <Grid
          style={{ height: '100%' }}
          data={products}
          resizable={true}
          reorderable={true}
          filterable={true}
          groupable={false}
          sortable={true}
          reorderable
        >
          <Column field="ProductID" title="ID" width="45px" locked />
          <Column field="ProductName" title="Name" width="250px" locked={true} />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="90px" />
          <Column field="UnitsInStock" title="In stock" width="90px" />
          <Column field="UnitsOnOrder" title="On order" width="90px" />
          <Column field="Discontinued" width="120px" />
          <Column field="QuantityPerUnit" title="Additional details" width="250px" />
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('my-app')
);