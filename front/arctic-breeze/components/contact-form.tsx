"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/send-message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        }),
      })
  
      if (!response.ok) {
        throw new Error("Ошибка при отправке формы")
      }
  
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
  
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Ошибка:", error)
      alert("Не удалось отправить сообщение. Попробуйте позже.")
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готовы начать? Свяжитесь с нами сегодня для получения бесплатной оценки вашего проекта по установке
            кондиционера.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Получить бесплатную оценку</h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Полное имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Номер телефона
                  </label>
                  <Input
                    className="w-1/2"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ваш номер телефона"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите нам о ваших потребностях в установке кондиционера"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Отправить запрос"}
                </Button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-sky-600 text-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="mt-1">+7 747 626 3554</p>
                  </div>
                </div>

                

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Алматы</p>
                    
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Часы работы</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Понедельник - Пятница:</span>
                    <span>8:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Суббота:</span>
                    <span>9:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Воскресенье:</span>
                    <span>Закрыто</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm">Экстренное обслуживание доступно 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
