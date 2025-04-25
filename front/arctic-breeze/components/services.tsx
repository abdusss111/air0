import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, Clock, Wrench } from "lucide-react"

const services = [
  {
    title: "Установка кондиционеров в жилых помещениях Алматы",
    description:
      "Профессиональная установка систем кондиционирования для домов любого размера, обеспечивающая оптимальный комфорт и энергоэффективность.",
    icon: Home,
  },
  {
    title: "Коммерческая установка - B2B",
    description:
      "Специализированные услуги по установке кондиционеров для офисов, торговых помещений и других коммерческих объектов с минимальными перебоями в работе вашего бизнеса. Установка промышленных кондиционеров.",
    icon: Building2,
  },
  
  {
    title: "Обслуживание, ремонт и заправка кондиционеров",
    description:
      "Комплексные услуги по обслуживанию и ремонту для поддержания эффективной работы вашей системы кондиционирования и продления срока ее службы.",
    icon: Wrench,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексный спектр услуг по установке кондиционеров для удовлетворения всех ваших потребностей
            в охлаждении.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-18 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-sky-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
