"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  total: number;
  page: number;
  limit: number;
}

const ProductsPagination = ({ total, page, limit }: Props) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/products?page=${page - 1}`} />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href={`/products?page=${page}`} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext href={`/products?page=${page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default ProductsPagination;
