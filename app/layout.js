import './globals.css';

// Título e a descrição do site
export const metadata = {
  title: 'Roteiros de Estudo',
  description: 'Materiais de estudo revisados para a rede municipal.'
};

// Representa a página atual
export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
