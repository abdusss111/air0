"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="w-full h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://eurometalgroup.ru/upload/iblock/2b2/fziblykhxlabe1zwa9j3i8gdjedcshb3.jpeg"
          alt="Техник устанавливает кондиционер"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Профессиональные услуги по установке кондиционеров в Алматы
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in animation-delay-200">
            Экспертная установка, обслуживание и ремонт для всех ваших потребностей в кондиционировании
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6 animate-fade-in animation-delay-400"
          >
            Получить бесплатную оценку
          </Button>
        </div>
      </div>
    </section>
  )
}
