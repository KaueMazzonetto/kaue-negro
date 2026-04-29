export default function GuiaGit() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Guia Git & GitHub 🚀
        </h1>

        {/* Passo 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            1 - Clonar um projeto do GitHub
          </h2>
          <Code>
            git clone {'"url do projeto"'} {'"pasta do projeto"'}
          </Code>

          <h3 className="mt-4 font-medium">1.1 Navegar até a pasta</h3>
          <Code>cd /pasta_do_projeto</Code>

          <h3 className="mt-4 font-medium">1.2 Ver o conteúdo da pasta</h3>
          <Code>ls</Code>
        </section>

        {/* Passo 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2 - Instalar o projeto clonado
          </h2>
          <Code>npm install</Code>
        </section>

        {/* Passo 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3 - Remover o repositório do projeto clonado
          </h2>

          <h3 className="mt-4 font-medium">
            3.1 Ver o repositório conectado
          </h3>
          <Code>git remote -v</Code>

          <h3 className="mt-4 font-medium">
            3.2 Remover o repositório remoto
          </h3>
          <Code>git remote remove origin</Code>
        </section>

        {/* Passo 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            4 - Conectar ao seu repositório
          </h2>

          <h3 className="mt-4 font-medium">
            4.1 Conectar ao repositório criado
          </h3>
          <Code>git remote add origin {'"url do git"'}</Code>

          <h3 className="mt-4 font-medium">
            4.2 Ir para branch main
          </h3>
          <Code>git branch -M main</Code>
        </section>

        {/* Passo 5 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            5 - Enviar projeto para o repositório
          </h2>

          <h3 className="mt-4 font-medium">
            5.1 Preparar arquivos
          </h3>
          <Code>git add .</Code>

          <h3 className="mt-4 font-medium">
            5.2 Criar commit
          </h3>
          <Code>git commit -m {'"versao 1"'}</Code>

          <h3 className="mt-4 font-medium">
            5.3 Enviar para o GitHub
          </h3>
          <Code>git push -u origin main</Code>
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