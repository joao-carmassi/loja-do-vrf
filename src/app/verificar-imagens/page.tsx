/* eslint-disable jsx-a11y/alt-text */
'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Upload,
  FileSpreadsheet,
  Image,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import ExcelJS from 'exceljs';

interface Produto {
  id: string;
  nome: string;
  sku: string;
}

interface ResultadoVerificacao {
  totalProdutos: number;
  totalImagens: number;
  imagensEncontradas: number;
  imagensFaltantes: Produto[];
}

export default function VerificarImagensPage(): React.ReactNode {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [imagensEnviadas, setImagensEnviadas] = useState<Set<string>>(
    new Set(),
  );
  const [resultado, setResultado] = useState<ResultadoVerificacao | null>(null);
  const [excelCarregado, setExcelCarregado] = useState(false);
  const [imagensCarregadas, setImagensCarregadas] = useState(false);
  const [carregandoExcel, setCarregandoExcel] = useState(false);
  const [carregandoImagens, setCarregandoImagens] = useState(false);

  const handleExcelUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      setCarregandoExcel(true);

      try {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(arrayBuffer);

        const worksheet = workbook.worksheets[0];
        if (!worksheet) {
          alert('Nenhuma planilha encontrada no arquivo!');
          setCarregandoExcel(false);
          return;
        }

        const headers: { [key: number]: string } = {};
        const data: Produto[] = [];

        worksheet.eachRow((row, rowNumber) => {
          if (rowNumber === 1) {
            // Primeira linha são os headers
            row.eachCell((cell, colNumber) => {
              const headerValue = String(cell.value).trim().toLowerCase();
              if (headerValue) {
                headers[colNumber] = headerValue;
              }
            });
          } else {
            // Linhas de dados
            const rowData: { [key: string]: string } = {};

            Object.entries(headers).forEach(([colNumber, header]) => {
              const cell = row.getCell(Number(colNumber));
              let value = cell.value ?? '';

              // Garante que id seja sempre string
              if (header === 'id' && value !== '') {
                value = String(value);
              } else {
                value = String(value);
              }

              rowData[header] = value;
            });

            // Só adiciona se tiver um ID válido
            if (rowData.id && rowData.id.trim() !== '') {
              data.push({
                id: rowData.id.trim(),
                nome: rowData.nome || '',
                sku: rowData.sku || '',
              });
            }
          }
        });

        setProdutos(data);
        setExcelCarregado(true);
        setResultado(null);
      } catch (error) {
        console.error('Erro ao ler Excel:', error);
        alert(
          'Erro ao ler o arquivo Excel. Verifique se o formato está correto.',
        );
      } finally {
        setCarregandoExcel(false);
      }
    },
    [],
  );

  const handleImagensUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      setCarregandoImagens(true);

      try {
        const nomesImagens = new Set<string>();

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          // Remove a extensão para comparar só o nome base
          const nomeBase = file.name.replace(/\.[^/.]+$/, '');
          nomesImagens.add(nomeBase);
        }

        setImagensEnviadas(nomesImagens);
        setImagensCarregadas(true);
        setResultado(null);
      } catch (error) {
        console.error('Erro ao processar imagens:', error);
        alert('Erro ao processar as imagens.');
      } finally {
        setCarregandoImagens(false);
      }
    },
    [],
  );

  const verificarImagens = useCallback(() => {
    if (produtos.length === 0 || imagensEnviadas.size === 0) {
      alert('Por favor, carregue tanto o Excel quanto as imagens primeiro.');
      return;
    }

    const imagensFaltantes: Produto[] = [];
    let imagensEncontradas = 0;

    produtos.forEach((produto) => {
      // Verifica se existe uma imagem com o ID do produto (sem extensão)
      if (imagensEnviadas.has(produto.id)) {
        imagensEncontradas++;
      } else {
        imagensFaltantes.push(produto);
      }
    });

    setResultado({
      totalProdutos: produtos.length,
      totalImagens: imagensEnviadas.size,
      imagensEncontradas,
      imagensFaltantes,
    });
  }, [produtos, imagensEnviadas]);

  const exportarFaltantes = useCallback(() => {
    if (!resultado || resultado.imagensFaltantes.length === 0) return;

    const csvContent = [
      'ID,SKU,Nome,Imagem Esperada',
      ...resultado.imagensFaltantes.map(
        (p) => `"${p.id}","${p.sku}","${p.nome}","${p.id}.png"`,
      ),
    ].join('\n');

    const blob = new Blob(['\ufeff' + csvContent], {
      type: 'text/csv;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'imagens_faltantes.csv';
    link.click();
    URL.revokeObjectURL(url);
  }, [resultado]);

  const limparTudo = useCallback(() => {
    setProdutos([]);
    setImagensEnviadas(new Set());
    setResultado(null);
    setExcelCarregado(false);
    setImagensCarregadas(false);
  }, []);

  return (
    <main className='container mx-auto px-4 py-8 max-w-4xl min-h-container-mobile lg:min-h-container grid place-items-center'>
      <div>
        <h1 className='text-3xl font-bold text-center mb-2'>
          Verificador de Imagens de Produtos
        </h1>
        <p className='text-muted-foreground text-center mb-8'>
          Compare o Excel de produtos com as imagens disponíveis para
          identificar as faltantes
        </p>
        <div className='grid gap-6 md:grid-cols-2 mb-6'>
          {/* Upload Excel */}
          <Card className={excelCarregado ? 'border-green-500' : ''}>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-lg'>
                <FileSpreadsheet className='h-5 w-5' />
                1. Excel de Produtos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <label className='block'>
                <input
                  type='file'
                  accept='.xlsx,.xls'
                  onChange={handleExcelUpload}
                  className='hidden'
                  disabled={carregandoExcel}
                />
                <div className='border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors'>
                  {carregandoExcel ? (
                    <div className='flex flex-col items-center gap-2'>
                      <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary' />
                      <span>Carregando...</span>
                    </div>
                  ) : excelCarregado ? (
                    <div className='flex flex-col items-center gap-2 text-green-600'>
                      <CheckCircle2 className='h-8 w-8' />
                      <span className='font-medium'>
                        {produtos.length} produtos carregados
                      </span>
                      <span className='text-sm text-muted-foreground'>
                        Clique para trocar
                      </span>
                    </div>
                  ) : (
                    <div className='flex flex-col items-center gap-2'>
                      <Upload className='h-8 w-8 text-muted-foreground' />
                      <span>Clique para selecionar o Excel</span>
                      <span className='text-sm text-muted-foreground'>
                        .xlsx ou .xls
                      </span>
                    </div>
                  )}
                </div>
              </label>
            </CardContent>
          </Card>
          {/* Upload Imagens */}
          <Card className={imagensCarregadas ? 'border-green-500' : ''}>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-lg'>
                <Image className='h-5 w-5' />
                2. Pasta de Imagens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <label className='block'>
                <input
                  type='file'
                  accept='image/*'
                  multiple
                  onChange={handleImagensUpload}
                  className='hidden'
                  disabled={carregandoImagens}
                  // @ts-expect-error - webkitdirectory não é tipado mas funciona
                  webkitdirectory=''
                />
                <div className='border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors'>
                  {carregandoImagens ? (
                    <div className='flex flex-col items-center gap-2'>
                      <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary' />
                      <span>Carregando...</span>
                    </div>
                  ) : imagensCarregadas ? (
                    <div className='flex flex-col items-center gap-2 text-green-600'>
                      <CheckCircle2 className='h-8 w-8' />
                      <span className='font-medium'>
                        {imagensEnviadas.size} imagens carregadas
                      </span>
                      <span className='text-sm text-muted-foreground'>
                        Clique para trocar
                      </span>
                    </div>
                  ) : (
                    <div className='flex flex-col items-center gap-2'>
                      <Upload className='h-8 w-8 text-muted-foreground' />
                      <span>Clique para selecionar a pasta</span>
                      <span className='text-sm text-muted-foreground'>
                        Selecione a pasta com as imagens
                      </span>
                    </div>
                  )}
                </div>
              </label>
            </CardContent>
          </Card>
        </div>
        {/* Botões de ação */}
        <div className='flex gap-4 justify-center mb-8'>
          <Button
            size='lg'
            onClick={verificarImagens}
            disabled={!excelCarregado || !imagensCarregadas}
          >
            Verificar Imagens
          </Button>
          <Button
            size='lg'
            variant='outline'
            onClick={limparTudo}
            disabled={!excelCarregado && !imagensCarregadas}
          >
            Limpar Tudo
          </Button>
        </div>
        {/* Resultado */}
        {resultado && (
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <AlertCircle className='h-5 w-5' />
                Resultado da Verificação
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Resumo */}
              <div className='grid gap-4 md:grid-cols-4 mb-6'>
                <div className='bg-muted rounded-lg p-4 text-center'>
                  <div className='text-2xl font-bold'>
                    {resultado.totalProdutos}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Produtos no Excel
                  </div>
                </div>
                <div className='bg-muted rounded-lg p-4 text-center'>
                  <div className='text-2xl font-bold'>
                    {resultado.totalImagens}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Imagens Enviadas
                  </div>
                </div>
                <div className='bg-green-100 dark:bg-green-900/30 rounded-lg p-4 text-center'>
                  <div className='text-2xl font-bold text-green-600'>
                    {resultado.imagensEncontradas}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Encontradas
                  </div>
                </div>
                <div className='bg-red-100 dark:bg-red-900/30 rounded-lg p-4 text-center'>
                  <div className='text-2xl font-bold text-red-600'>
                    {resultado.imagensFaltantes.length}
                  </div>
                  <div className='text-sm text-muted-foreground'>Faltantes</div>
                </div>
              </div>
              {/* Lista de faltantes */}
              {resultado.imagensFaltantes.length > 0 ? (
                <>
                  <div className='flex justify-between items-center mb-4'>
                    <h3 className='font-semibold'>
                      Imagens Faltantes ({resultado.imagensFaltantes.length})
                    </h3>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={exportarFaltantes}
                    >
                      Exportar CSV
                    </Button>
                  </div>
                  <div className='max-h-96 overflow-y-auto border rounded-lg'>
                    <table className='w-full text-sm'>
                      <thead className='bg-muted sticky top-0'>
                        <tr>
                          <th className='text-left p-3'>#</th>
                          <th className='text-left p-3'>
                            ID (Nome esperado da imagem)
                          </th>
                          <th className='text-left p-3'>SKU</th>
                          <th className='text-left p-3'>Nome do Produto</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultado.imagensFaltantes.map((produto, index) => (
                          <tr
                            key={produto.id}
                            className='border-t hover:bg-muted/50'
                          >
                            <td className='p-3 text-muted-foreground'>
                              {index + 1}
                            </td>
                            <td className='p-3 font-mono text-xs'>
                              {produto.id}.png
                            </td>
                            <td className='p-3'>{produto.sku}</td>
                            <td className='p-3'>{produto.nome}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <div className='text-center py-8 text-green-600'>
                  <CheckCircle2 className='h-12 w-12 mx-auto mb-2' />
                  <p className='font-semibold'>
                    Todas as imagens foram encontradas!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
        {/* Instruções */}
        <Card className='mt-8'>
          <CardHeader>
            <CardTitle className='text-lg'>Como usar</CardTitle>
          </CardHeader>
          <CardContent className='text-sm text-muted-foreground space-y-2'>
            <p>
              1. <strong>Carregue o Excel</strong> - O arquivo deve ter uma
              coluna &quot;id&quot; com o identificador de cada produto
            </p>
            <p>
              2. <strong>Selecione a pasta de imagens</strong> - O sistema irá
              ler todos os nomes dos arquivos de imagem
            </p>
            <p>
              3. <strong>Clique em Verificar</strong> - O sistema comparará se
              existe uma imagem para cada ID do Excel
            </p>
            <p>
              4. <strong>Exporte o resultado</strong> - Se houver imagens
              faltantes, você pode exportar a lista em CSV
            </p>
            <p className='mt-4 p-3 bg-muted rounded-lg'>
              <strong>Formato esperado:</strong> Para um produto com ID
              &quot;ABC123&quot;, o sistema espera encontrar uma imagem chamada
              &quot;ABC123.png&quot; (ou qualquer outra extensão de imagem)
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
