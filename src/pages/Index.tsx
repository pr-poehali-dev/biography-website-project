
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Герой-секция */}
      <section className="relative bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <Badge className="bg-cyan-500 text-white hover:bg-cyan-600">Инновационная защита</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                SafeNet <span className="text-cyan-400">защитит</span> ваши данные в цифровом мире
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-xl">
                Революционная система кибербезопасности для бизнеса и частных лиц
              </p>
              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">Запросить демо</Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="SafeNet Security" 
                className="rounded-lg shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему выбирают SafeNet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наша инновационная платформа обеспечивает надежную защиту от всех видов киберугроз
            </p>
            <Separator className="mt-8 mx-auto w-20 bg-cyan-500" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Максимальная защита",
                desc: "Многоуровневая система шифрования и защиты от всех типов кибератак"
              },
              {
                icon: "Zap",
                title: "Молниеносная скорость",
                desc: "Производительность системы не снижается даже при максимальной нагрузке"
              },
              {
                icon: "BarChart",
                title: "Подробная аналитика",
                desc: "Мониторинг угроз в реальном времени с детальными отчетами"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] border-t-4 border-t-cyan-500">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-cyan-100 rounded-full">
                    <Icon name={feature.icon} className="h-7 w-7 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция с продуктами */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши решения</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр решений для вашей безопасности в цифровом пространстве
            </p>
            <Separator className="mt-8 mx-auto w-20 bg-cyan-500" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "SafeNet для бизнеса",
                desc: "Корпоративная защита с учетом специфики вашей компании. Включает защиту серверов, рабочих станций и облачных сервисов.",
                image: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                features: ["Защита от DDoS-атак", "Безопасность электронной почты", "Защита веб-приложений"]
              },
              {
                title: "SafeNet для дома",
                desc: "Надежная защита ваших устройств и личных данных. Интуитивный интерфейс и автоматическое обновление.",
                image: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                features: ["Анти-фишинг", "Защита паролей", "Родительский контроль"]
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg rounded-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="h-5 w-5 text-cyan-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Узнать больше</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция доверия */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Нам доверяют</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Клиенты выбирают SafeNet для защиты своих данных
            </p>
            <Separator className="mt-8 mx-auto w-20 bg-cyan-500" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
              "https://images.unsplash.com/photo-1614680376408-16afb0d5632a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
              "https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80"
            ].map((logo, index) => (
              <div key={index} className="p-4 grayscale hover:grayscale-0 transition-all">
                <img src={logo} alt={`Клиент ${index + 1}`} className="h-16 object-contain" />
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Icon name="Quote" className="h-12 w-12 text-cyan-400 mb-6" />
              <p className="text-xl md:text-2xl text-gray-600 italic mb-6 max-w-3xl">
                "SafeNet изменил наш подход к безопасности. Мы наконец-то можем чувствовать себя защищенными от современных угроз."
              </p>
              <div>
                <p className="font-semibold">Александр Иванов</p>
                <p className="text-gray-500">Технический директор, ТехноКорп</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с призывом к действию */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы защитить свои данные?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Начните использовать SafeNet уже сегодня и получите бесплатный анализ текущих рисков
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Запросить демо
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Связаться с экспертом
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SafeNet</h3>
              <p className="text-gray-400 mb-4">
                Инновационные решения в сфере кибербезопасности. Защита данных — наша специализация.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="text-white hover:text-cyan-400 hover:bg-transparent">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-cyan-400 hover:bg-transparent">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-cyan-400 hover:bg-transparent">
                  <Icon name="Linkedin" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-cyan-400" />
                  <p>info@safenet-project.ru</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-cyan-400" />
                  <p>+7 (800) 123-45-67</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-cyan-400" />
                  <p>Москва, ул. Технологическая, 42</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Решения</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Для бизнеса</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Для частных лиц</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Консалтинг</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Поддержка</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>© 2025 SafeNet. Все права защищены.</p>
            <div className="mt-2 flex items-center justify-center gap-1 text-sm">
              <span>Проект разработан</span>
              <a 
                href="https://github.com/userCBACTNK" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
              >
                <Icon name="Github" className="h-4 w-4" />
                @userCBACTNK
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
