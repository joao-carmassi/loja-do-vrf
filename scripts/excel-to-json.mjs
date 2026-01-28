import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const excelPath = path.join(__dirname, '../src/data/produtos.xlsx');
const jsonPath = path.join(__dirname, '../src/data/produtos.json');

/**
 * Converts the first worksheet of an Excel file to a JSON file.
 *
 * Reads the Excel file specified by `excelPath`, extracts the data from the first worksheet,
 * and writes it as a JSON array to the file specified by `jsonPath`. The first row of the worksheet
 * is treated as headers, and each subsequent row is converted into an object using those headers as keys.
 *
 * - Ensures the 'id' field is always a string.
 * - Handles empty cells by assigning empty strings.
 * - Logs progress and errors to the console.
 *
 * @async
 * @function
 * @throws Will exit the process if no worksheet is found in the Excel file.
 */
async function convertExcelToJson() {
  console.log('📊 Convertendo produtos.xlsx para produtos.json...');

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);

  const worksheet = workbook.worksheets[0];

  if (!worksheet) {
    console.error('❌ Nenhuma planilha encontrada!');
    process.exit(1);
  }

  const headers = [];
  const data = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      // Primeira linha são os headers
      row.eachCell((cell, colNumber) => {
        const headerValue = String(cell.value).trim();
        if (headerValue) {
          headers[colNumber] = headerValue;
        }
      });
    } else {
      // Linhas de dados
      const rowData = {};
      // Itera sobre todos os headers válidos para incluir mesmo valores vazios
      headers.forEach((header, colNumber) => {
        if (header) {
          const cell = row.getCell(colNumber);
          let value = cell.value ?? '';

          // Garante que id seja sempre string
          if (header === 'id' && value !== '') {
            value = String(value);
          }

          rowData[header] = value;
        }
      });

      // Só adiciona se tiver pelo menos uma propriedade
      if (Object.keys(rowData).length > 0) {
        data.push(rowData);
      }
    }
  });

  const output = { data };

  fs.writeFileSync(jsonPath, JSON.stringify(output, null, 2), 'utf-8');

  console.log(`✅ produtos.json criado com ${data.length} produtos!`);
}

convertExcelToJson().catch((err) => {
  console.error('❌ Erro ao converter Excel:', err);
  process.exit(1);
});
