import { groupBy } from "lodash";
import { REVIEWS } from "../shopify-table-names";

export const selectCount = (table: string): string => {
  const result = `SELECT COUNT(*) AS c FROM ${table};`

  return result;
}

export const selectRowById = (id: number, table: string): string => {
  return `SELECT * FROM ${table} WHERE id = '${id}'`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `SELECT * FROM CATEGORIES WHERE title='${title}'`;
};

export const selectAppCategoriesByAppId = (appId: number): string => {
  return `SELECT apps.title as app_title , category_id, categories.title as category_title 
  FROM apps 
  JOIN apps_categories
  ON apps.id = apps_categories.app_id
  LEFT JOIN categories
  ON  categories.id = apps_categories.category_id
  WHERE app_id = ${appId}
  `;
};

export const selectUnigueRowCount = (tableName: string, columnName: string): string => {
  const result = `SELECT COUNT(DISTINCT ${columnName}) AS c FROM ${tableName}`;
  return result;
};

export const selectReviewByAppIdAuthor = (appId: number, author: string): string => {
  return `SELECT * FROM REVIEWS WHERE app_id = ${appId} AND author = '${author}'`;
};

export const selectColumnFromTable = (columnName: string, tableName: string): string => {
  return `SELECT ${columnName} FROM ${tableName}`;
};

