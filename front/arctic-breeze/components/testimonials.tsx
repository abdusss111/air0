"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Сара Иванова",
    role: "Домовладелец",
    content:
      "«Арктический Бриз» установил нашу новую систему кондиционирования, и мы не могли быть счастливее. Специалисты были профессиональны, компетентны и завершили работу раньше срока. Наш дом никогда не был таким комфортным!",
    rating: 5,
  },
  {
    name: "Михаил Чен",
    role: "Владелец бизнеса",
    content:
      "Мы наняли «Арктический Бриз» для установки кондиционеров в нашем новом офисном помещении. Их команда работала эффективно и с минимальными перебоями в нашей деятельности. Качество их работы превосходное, и система работает идеально.",
    rating: 5,
  },
  {
    name: "Елена Вильямс",
    role: "Управляющая недвижимостью",
    content:
      "Я работала со многими компаниями HVAC на протяжении многих лет, и «Арктический Бриз» выделяется своей надежностью и опытом. Они устанавливали системы в нескольких объектах, которыми я управляю, всегда с отличными результатами.",
    rating: 5,
  },
  {
    name: "Роберт Гарсия",
    role: "Домовладелец",
    content:
      "Команда «Арктический Бриз» была пунктуальной, вежливой и тщательной. Они нашли время, чтобы объяснить наши варианты и рекомендовали систему, которая идеально соответствует нашим потребностям и бюджету. Настоятельно рекомендую их услуги!",
    rating: 4,
  },
  {
    name: "Лиза Томпсон",
    role: "Владелица ресторана",
    content:
      "Когда наша старая система кондиционирования вышла из строя в разгар лета, «Арктический Бриз» пришел на помощь с экстренной установкой. Их быстрая реакция спасла наш бизнес от потери клиентов во время жары.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])

  const updateVisibleTestimonials = () => {
    const width = window.innerWidth
    let count = 1 // Mobile default

    if (width >= 1024) {
      count = 3 // Desktop
    } else if (width >= 768) {
      count = 2 // Tablet
    }

    const indices = []
    for (let i = 0; i < count; i++) {
      indices.push((currentIndex + i) % testimonials.length)
    }

    setVisibleTestimonials(indices)
  }

  useEffect(() => {
    updateVisibleTestimonials()
    window.addEventListener("resize", updateVisibleTestimonials)

    return () => {
      window.removeEventListener("resize", updateVisibleTestimonials)
    }
  }, [currentIndex])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Что говорят наши клиенты</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Не верьте нам на слово. Вот что говорят наши довольные клиенты о наших услугах по установке кондиционеров.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {visibleTestimonials.map((index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonials[index].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        {[...Array(5 - testimonials[index].rating)].map((_, i) => (
                          <Star key={i + testimonials[index].rating} className="w-5 h-5 text-gray-300" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic">{testimonials[index].content}</p>
                      <div>
                        <p className="font-semibold text-gray-800">{testimonials[index].name}</p>
                        <p className="text-gray-500 text-sm">{testimonials[index].role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                visibleTestimonials.includes(index) ? "bg-sky-600" : "bg-gray-300"
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
