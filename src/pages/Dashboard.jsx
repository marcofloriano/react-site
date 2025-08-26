import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Example() {
    if(!localStorage.getItem("user")) {
      return (
        <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 mx-auto max-w-2xl text-center">
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-white">Acesso Negado</h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-400">
              Você precisa estar logado para acessar esta página.
            </p>
          </div>
        </div>
      );
    }
  return (
    <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 mx-auto max-w-2xl text-center">
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-white">Informações do Estudante</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-400">
          Dados pessoais e detalhes da inscrição.
        </p>
      </div>
      <div className="mt-6 border-t border-white/10">
        <dl className="divide-y divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Nome completo</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Ana Silva</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Curso pretendido</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Cibersegurança</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">E-mail</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">ana.silva@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Disponibilidade</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              Noturno (aulas presenciais no campus)
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Sobre</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
              Estudante interessada em aprofundar conhecimentos em redes e segurança da informação. 
              Busca experiências práticas em laboratório e contato direto com docentes especializados.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-100">Documentos anexados</dt>
            <dd className="mt-2 text-sm text-white sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-white/5 rounded-md border border-white/10">
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-white">historico_academico.pdf</span>
                      <span className="shrink-0 text-gray-500">1.8mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                      Baixar
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-500" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-white">carta_de_interesse.pdf</span>
                      <span className="shrink-0 text-gray-500">3.2mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                      Baixar
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
