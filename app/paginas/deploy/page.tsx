export default function DeployVercel() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Deploy na Vercel 🚀
        </h1>

        {/* Passo 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1 - Acessar a Vercel
          </h2>
          <p className="text-gray-600">
            Acesse o site da Vercel e faça login.
          </p>
          <Code>https://vercel.com</Code>
        </section>

        {/* Passo 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2 - Conectar com GitHub
          </h2>
          <p className="text-gray-600">
            Clique em {'"Continue with GitHub"'} e autorize o acesso.
          </p>
        </section>

        {/* Passo 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3 - Importar repositório
          </h2>
          <p className="text-gray-600">
            Clique em {'"Add New Project"'} e selecione seu repositório do GitHub.
          </p>
        </section>

        {/* Passo 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4 - Configurar o projeto
          </h2>
          <p className="text-gray-600">
            A Vercel detecta automaticamente projetos Next.js. Apenas confirme
            as configurações.
          </p>

          <h3 className="mt-4 font-medium">Configurações comuns:</h3>
          <Code>
            Framework: Next.js{'\n'}
            Build Command: npm run build{'\n'}
            Output: .next
          </Code>
        </section>

        {/* Passo 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            5 - Fazer o deploy
          </h2>
          <p className="text-gray-600">
            Clique em {'"Deploy"'} e aguarde o processo finalizar.
          </p>
        </section>

        {/* Passo 6 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            6 - Acessar o site
          </h2>
          <p className="text-gray-600">
            Após o deploy, a Vercel irá gerar uma URL pública para seu site.
          </p>

          <Code>https://seu-projeto.vercel.app</Code>
        </section>
      </div>
    </main>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2 overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
}