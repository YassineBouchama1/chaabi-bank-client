import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Article } from '../../types/demand';

const articleSchema = z.object({
  name: z
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(50, "Title must be less than 50 characters"),
  quantity: z
    .number()
    .min(1, "Quantity must be at least 1")
    .max(1000, "Quantity must be less than 1000"),
  price: z
    .number()
    .min(0.01, "Price must be greater than 0")
    .max(999999, "Price must be less than 999999"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
});

type ArticleFormData = z.infer<typeof articleSchema>;

interface ArticleTableProps {
  articles: Omit<Article, 'id'>[];
  setArticles: React.Dispatch<React.SetStateAction<Omit<Article, 'id'>[]>>;
}

export const ArticleTable: React.FC<ArticleTableProps> = ({ articles, setArticles }) => {
  const [isAddingArticle, setIsAddingArticle] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      name: "",
      quantity: 1,
      price: 0,
      description: "",
    },
  });

  const onSubmit = (data: ArticleFormData) => {
    setArticles(prev => [...prev, data]);
    reset();
    setIsAddingArticle(false);
  };

  const removeArticle = (index: number) => {
    setArticles(prev => prev.filter((_, i) => i !== index));
  };

  const getTotalAmount = () => {
    return articles.reduce((total, article) => total + (article.quantity * article.price), 0);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="text-md font-medium text-gray-700">Articles List</h4>
        <button
          type="button"
          onClick={() => setIsAddingArticle(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-sm"
        >
          Add Article
        </button>
      </div>

      {isAddingArticle && (
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h5 className="text-sm font-medium text-gray-700 mb-3">
            Add New Article
          </h5>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Article Name"
                      className={`w-full px-3 py-2 border rounded text-sm ${
                        errors.name ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Article description"
                      className={`w-full px-3 py-2 border rounded text-sm ${
                        errors.description
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div>
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <input
                      {...field}
                      type="number"
                      value={value}
                      onChange={(e) => onChange(parseInt(e.target.value) || 0)}
                      placeholder="Quantity"
                      className={`w-full px-3 py-2 border rounded text-sm ${
                        errors.quantity ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.quantity && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

              <div>
                <Controller
                  name="price"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <input
                      {...field}
                      type="number"
                      step="0.01"
                      value={value}
                      onChange={(e) =>
                        onChange(parseFloat(e.target.value) || 0)
                      }
                      placeholder="Price"
                      className={`w-full px-3 py-2 border rounded text-sm ${
                        errors.price ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.price && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-sm"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAddingArticle(false);
                  reset();
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {articles.length > 0 && (
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Quantity
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.map((article, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {article.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {article.quantity}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    ${article.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                    ${(article.quantity * article.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      onClick={() => removeArticle(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td
                  colSpan={3}
                  className="px-4 py-3 text-sm font-medium text-gray-900 text-right"
                >
                  Total Amount:
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-900">
                  ${getTotalAmount().toFixed(2)}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {articles.length === 0 && !isAddingArticle && (
        <div className="text-center py-8 text-gray-500">
          No articles added yet. Click "Add Article" to start.
        </div>
      )}
    </div>
  );
};
