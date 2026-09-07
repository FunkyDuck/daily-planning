import * as XLSX from 'xlsx';

const EXCEL_URL = 'https://hainautea-my.sharepoint.com/:x:/g/personal/loic_jacques_hainaut-ea_be/IQAjyS2ixLlzRb0bJxhQtSoRAcgc3rArvvLW2W0wbKMc914?rtime=KtSjwAAN30g'

export async function fetchExcel() {
  const response = await fetch(EXCEL_URL);

  if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const buffer = await response.arrayBuffer();
  const workbook = XLSX.read(buffer);

  return workbook
}
