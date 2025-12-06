import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Index() {
  const [balance] = useState(1250.50);
  
  const savedRoutes = [
    { id: 1, from: 'Центр', to: 'Аэропорт', price: 350, time: '45 мин', icon: 'Plane' },
    { id: 2, from: 'Дом', to: 'Работа', price: 120, time: '25 мин', icon: 'Briefcase' },
    { id: 3, from: 'Центр', to: 'Вокзал', price: 180, time: '30 мин', icon: 'Train' },
  ];

  const tripHistory = [
    { id: 1, date: '15 дек, 10:30', route: 'Центр → Аэропорт', price: 350, status: 'completed' },
    { id: 2, date: '14 дек, 18:45', route: 'Работа → Дом', price: 120, status: 'completed' },
    { id: 3, date: '14 дек, 08:20', route: 'Дом → Работа', price: 120, status: 'completed' },
    { id: 4, date: '13 дек, 16:00', route: 'Центр → Вокзал', price: 180, status: 'completed' },
    { id: 5, date: '12 дек, 12:30', route: 'Аэропорт → Центр', price: 350, status: 'completed' },
  ];

  const popularRoutes = [
    { id: 1, from: 'Центр', to: 'Аэропорт', price: 350, duration: '45 мин', gradient: 'from-purple-500 to-pink-500' },
    { id: 2, from: 'Север', to: 'Юг', price: 200, duration: '35 мин', gradient: 'from-blue-500 to-cyan-500' },
    { id: 3, from: 'Восток', to: 'Запад', price: 250, duration: '40 мин', gradient: 'from-orange-500 to-red-500' },
    { id: 4, from: 'Центр', to: 'Вокзал', price: 180, duration: '30 мин', gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Транспортная карта
            </h1>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Settings" size={24} />
            </Button>
          </div>
          <p className="text-muted-foreground">Удобная оплата проезда в один клик</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1 bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-lg animate-scale-in">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="CreditCard" size={24} />
                Баланс карты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold mb-6">{balance.toFixed(2)} ₽</div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-white text-purple-600 hover:bg-gray-100">
                  <Icon name="Plus" size={18} className="mr-2" />
                  Пополнить
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  <Icon name="History" size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 shadow-lg animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Star" size={24} className="text-orange-500" />
                Сохраненные маршруты
              </CardTitle>
              <CardDescription>Быстрый доступ к любимым направлениям</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {savedRoutes.map((route) => (
                  <div
                    key={route.id}
                    className="p-4 rounded-xl border-2 hover:border-purple-500 transition-all cursor-pointer hover:shadow-md group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                        <Icon name={route.icon as any} size={20} className="text-purple-600" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {route.time}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="MapPin" size={14} className="text-gray-400" />
                        <span className="font-medium">{route.from}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Navigation" size={14} className="text-gray-400" />
                        <span className="font-medium">{route.to}</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">{route.price} ₽</span>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                        Оплатить
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="routes" className="mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-6">
            <TabsTrigger value="routes" className="flex items-center gap-2">
              <Icon name="Map" size={18} />
              Маршруты
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Icon name="Receipt" size={18} />
              История
            </TabsTrigger>
          </TabsList>

          <TabsContent value="routes" className="space-y-4">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-blue-500" />
                  Популярные маршруты
                </CardTitle>
                <CardDescription>Самые востребованные направления города</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {popularRoutes.map((route, index) => (
                    <div
                      key={route.id}
                      className="relative overflow-hidden rounded-2xl p-6 text-white cursor-pointer group hover:scale-[1.02] transition-transform animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${route.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-white/20 text-white border-0">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {route.duration}
                          </Badge>
                          <Icon name="ArrowRight" size={24} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span className="text-xl font-semibold">{route.from}</span>
                          </div>
                          <div className="h-8 w-0.5 bg-white/50 ml-1" />
                          <div className="flex items-center gap-2">
                            <Icon name="MapPin" size={16} />
                            <span className="text-xl font-semibold">{route.to}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-white/30">
                          <span className="text-3xl font-bold">{route.price} ₽</span>
                          <Button className="bg-white text-gray-900 hover:bg-gray-100">
                            Выбрать
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="History" size={24} className="text-green-500" />
                  История поездок
                </CardTitle>
                <CardDescription>Последние транзакции по вашей карте</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tripHistory.map((trip, index) => (
                    <div
                      key={trip.id}
                      className="flex items-center justify-between p-4 rounded-xl border hover:border-purple-500 hover:shadow-md transition-all cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                          <Icon name="Bus" size={24} className="text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{trip.route}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {trip.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-purple-600">-{trip.price} ₽</p>
                        <Badge className="bg-green-100 text-green-700 border-0">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Оплачено
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="shadow-lg bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Быстрая оплата</h3>
                  <p className="text-muted-foreground">Оплачивайте проезд в одно касание с помощью NFC</p>
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Узнать больше
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
