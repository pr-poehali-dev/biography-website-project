
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхний герой-раздел */}
      <section className="relative bg-gradient-to-r from-violet-100 to-indigo-100 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Иван Петров</h1>
              <h2 className="text-xl md:text-2xl text-gray-700">Писатель, исследователь, путешественник</h2>
              <p className="text-gray-600 max-w-lg">
                Исследователь жизни и автор книг о саморазвитии и путешествиях. Более 15 лет опыта в изучении культур разных стран.
              </p>
              <div className="flex gap-3">
                <Button>Связаться</Button>
                <Button variant="outline">Узнать больше</Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Avatar className="h-40 w-40 md:h-64 md:w-64 border-4 border-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=512&h=512&q=80" alt="Иван Петров" />
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел "Обо мне" */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Обо мне</h2>
            <p className="text-gray-600">Немного о моем пути и жизненной философии</p>
            <Separator className="mt-4 mx-auto w-20 bg-violet-400" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-gray-600">
                Родился в 1985 году в Санкт-Петербурге. С детства проявлял интерес к литературе и путешествиям. Окончил филологический факультет СПбГУ, после чего начал карьеру журналиста.
              </p>
              <p className="text-gray-600">
                За последние 15 лет посетил более 40 стран, написал 5 книг о саморазвитии и путешествиях, которые были переведены на несколько языков.
              </p>
              <p className="text-gray-600">
                Моя философия заключается в постоянном обучении и обмене опытом с людьми из разных культур.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden aspect-square">
                <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Путешествие" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden aspect-square">
                <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="За работой" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden col-span-2 aspect-video">
                <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Писательство" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел достижений */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Достижения</h2>
            <p className="text-gray-600">Ключевые моменты моей карьеры</p>
            <Separator className="mt-4 mx-auto w-20 bg-violet-400" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-violet-100 p-3 rounded-full">
                  <Icon name="BookOpen" className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold">5 книг</h3>
              </div>
              <p className="text-gray-600">Автор пяти бестселлеров о саморазвитии и путешествиях, переведенных на 7 языков</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-violet-100 p-3 rounded-full">
                  <Icon name="Globe" className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold">40+ стран</h3>
              </div>
              <p className="text-gray-600">Посетил более 40 стран на 5 континентах, изучая различные культуры и традиции</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-violet-100 p-3 rounded-full">
                  <Icon name="Award" className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold">7 наград</h3>
              </div>
              <p className="text-gray-600">Получил 7 литературных премий за вклад в развитие жанра путевых заметок</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Раздел "Хронология" */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Хронология</h2>
            <p className="text-gray-600">Ключевые этапы моего пути</p>
            <Separator className="mt-4 mx-auto w-20 bg-violet-400" />
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { year: "2007", title: "Окончание университета", desc: "Получил степень по филологии в СПбГУ" },
              { year: "2010", title: "Первая книга", desc: "Выпустил свою первую книгу «Путешествие внутрь себя»" },
              { year: "2013", title: "Кругосветное путешествие", desc: "Совершил годовое кругосветное путешествие через 20 стран" },
              { year: "2016", title: "Литературная премия", desc: "Получил первую международную литературную премию" },
              { year: "2020", title: "Фонд поддержки путешественников", desc: "Основал благотворительный фонд поддержки начинающих путешественников" }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-violet-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {item.year.substr(2)}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <Badge variant="outline">{item.year}</Badge>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контактный раздел */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Связаться со мной</h2>
            <p className="text-gray-600">Буду рад сотрудничеству и общению</p>
            <Separator className="mt-4 mx-auto w-20 bg-violet-400" />
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-violet-600" />
                  <p>ivan.petrov@example.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-violet-600" />
                  <p>+7 (999) 123-45-67</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-violet-600" />
                  <p>Санкт-Петербург, Россия</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center gap-4">
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Linkedin" className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© 2025 Иван Петров. Все права защищены.</p>
          <div className="mt-2 text-gray-400 text-sm">
            Сайт разработан с использованием современных технологий
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
