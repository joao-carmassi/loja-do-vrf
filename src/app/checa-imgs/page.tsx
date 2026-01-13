import { promises as fs } from 'fs';
import path from 'path';
import getProdutos from '@/utils/get-produtos';

const ChecaImgs = async (): Promise<React.ReactNode> => {
  const produtos = getProdutos.produtos;
  const imagensDir = path.join(process.cwd(), 'public', 'imgs', 'produtos');

  const imagensFaltantes: string[] = [];

  for (const produto of produtos) {
    const nomeImagem = `${produto.id}.png`;
    const caminhoImagem = path.join(imagensDir, nomeImagem);

    try {
      await fs.access(caminhoImagem);
    } catch {
      imagensFaltantes.push(nomeImagem);
    }
  }

  return (
    <main className='container mx-auto p-8 min-h-container-mobile md:min-h-container'>
      <h1 className='text-3xl font-bold mb-6'>Verificação de Imagens</h1>

      {imagensFaltantes.length === 0 ? (
        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded'>
          <p className='font-bold'>✓ Todas as imagens estão presentes</p>
          <p>Total de produtos verificados: {produtos.length}</p>
        </div>
      ) : (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
          <p className='font-bold mb-2'>
            ⚠ Imagens faltantes: {imagensFaltantes.length}
          </p>
          <ul className='list-disc list-inside mt-4'>
            {imagensFaltantes.map((imagem) => (
              <li key={imagem}>{imagem}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default ChecaImgs;
