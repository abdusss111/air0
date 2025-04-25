import { Clock, Award, Zap, Shield } from "lucide-react"

const benefits = [
  
  {
    title: "Сертифицированные специалисты",
    description:
      "Наша команда состоит из высококвалифицированных и сертифицированных профессионалов с многолетним опытом.",
    icon: Award,
  },
  {
    title: "Энергоэффективные решения",
    description:
      "Мы рекомендуем и устанавливаем энергоэффективные системы, которые помогают снизить ваши коммунальные платежи.",
    icon: Zap,
  },
  {
    title: "Гарантийная защита",
    description: "Все наши установки поставляются с комплексным гарантийным покрытием для вашего спокойствия.",
    icon: Shield,
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Почему выбирают нас</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            В компании "Арктический Бриз" мы стремимся предоставлять исключительные услуги по установке кондиционеров,
            которые выделяют нас среди конкурентов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
