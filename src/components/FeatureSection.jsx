import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Projetos Práticos",
    description:
      "Desenvolva projetos reais desde o primeiro semestre, aplicando conceitos em cenários práticos e construindo um portfólio sólido.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Corpo Docente Qualificado",
    description:
      "Aprenda com mestres e doutores que são referência no mercado, trazendo experiência prática e acadêmica para a sala de aula.",
    icon: LockClosedIcon,
  },
  {
    name: "Infraestrutura de Ponta",
    description:
      "Utilize laboratórios modernos e equipamentos de última geração, simulando o ambiente de trabalho das maiores empresas de tecnologia.",
    icon: ArrowPathIcon,
  },
  {
    name: "Networking e Carreira",
    description:
      "Conecte-se com uma vasta rede de ex-alunos e parceiros corporativos, abrindo portas para estágios e oportunidades de emprego.",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-14 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Acelere sua Carreira
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Tudo que você precisa para se tornar um profissional de ponta
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Nossa metodologia de ensino combina teoria robusta com prática
            intensiva, preparando você para os desafios reais do mercado de
            tecnologia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
