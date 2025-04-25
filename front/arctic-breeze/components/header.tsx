"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-sky-600">Арктический Бриз</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-sky-600 transition-colors"
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-sky-600 transition-colors"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-sky-600 transition-colors"
          >
            О нас
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 hover:text-sky-600 transition-colors"
          >
            Отзывы
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-sky-600 transition-colors"
          >
            Контакты
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-sky-600 hover:bg-sky-700">
            Получить бесплатную оценку
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-sky-600 transition-colors py-2"
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-sky-600 transition-colors py-2"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-sky-600 transition-colors py-2"
          >
            О нас
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 hover:text-sky-600 transition-colors py-2"
          >
            Отзывы
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-sky-600 transition-colors py-2"
          >
            Контакты
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-sky-600 hover:bg-sky-700 w-full">
            Получить бесплатную оценку
          </Button>
        </div>
      )}
    </header>
  )
}
