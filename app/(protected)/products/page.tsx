export const dynamic = "force-dynamic";

import { fetchProducts } from "@/lib/api";
import DataTable from "@/components/dataTable";
import { columns } from "./columns";
import ProductsPagination from "./pagination";

interface ProductsPageProps {
  searchParams: Promise<{ page?: string }>;
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);
  const limit = 10;

  const skip = page * limit;

  const data = await fetchProducts({ limit, skip });

  console.log("Page:", page);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Products</h1>

      <DataTable
        columns={columns}
        data={data.products}
        total={data.total}
        pageIndex={page - 1}
        pageSize={limit}
      />
    </div>
  );
};

export default ProductsPage;
