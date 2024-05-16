import { IMovie } from "../components/types";
import fs from 'fs';
import path from 'path'

export default function getAllData(): IMovie[] {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData: any =  fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data;
} 