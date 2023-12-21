import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function MyPagination() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 7; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}
