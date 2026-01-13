import { promises as fs } from 'fs';
import path from 'path';
import getProdutos from '@/utils/get-produtos';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
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

    if (imagensFaltantes.length === 0) {
      return NextResponse.json({ message: 'ok' });
    }

    return NextResponse.json({
      faltantes: imagensFaltantes,
      total: imagensFaltantes.length,
    });
  } catch {
    return NextResponse.json(
      { error: 'Erro ao verificar imagens' },
      { status: 500 }
    );
  }
}
